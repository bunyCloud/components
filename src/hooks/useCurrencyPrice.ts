import { Pair, Price, Token, TokenAmount, WAVAX } from '@pangolindex/sdk';
import { useMemo } from 'react';
import { ONE_TOKEN } from 'src/constants';
import { PairState, usePair, usePairs } from 'src/data/Reserves';
import { useChainId } from '.';

/**
 * Returns the tokens price in relation to gas coin (avax, wagmi, flare, etc)
 *
 * @param tokens array of tokens to get the price in wrapped gas coin
 * @returns object where the key is the address of the token and the value is the Price
 */
export function useTokensCurrenyPrice(tokens: Token[]): { [x: string]: Price } {
  const chainId = useChainId();
  const currency = WAVAX[chainId];

  // remove currency if exist
  const filteredTokens = tokens.filter((token) => !token.equals(currency));

  const _pairs: [Token, Token][] = filteredTokens.map((token) => [token, currency]);

  const pairs = usePairs(_pairs);

  const prices: { [x: string]: Price } = {};

  // if exist curreny, add to object with price 1
  const existCurrency = Boolean(tokens.find((token) => token.equals(currency)));
  if (existCurrency) {
    prices[currency.address] = new Price(currency, currency, '1', '1');
  }

  return useMemo(() => {
    pairs.map(([pairState, pair], index) => {
      const token = filteredTokens[index];
      // if not exist pair, return 0 for price of this token
      if (pairState !== PairState.EXISTS || !pair) {
        prices[token.address] = new Price(token, currency, '1', '0'); // 0
      } else {
        const tokenCurrencyPrice = pair.priceOf(token, currency);
        prices[token.address] = tokenCurrencyPrice;
      }
    });
    return prices;
  }, [pairs, prices, filteredTokens]);
}

/**
 * Returns the token price in relation to gas coin (avax, wagmi, flare, etc)
 *
 * @param token token to get the price
 * @returns the price of token in relation to gas coin
 */
export function useTokenCurrenyPrice(token: Token): Price {
  const chainId = useChainId();
  const currency = WAVAX[chainId];

  const [pairState, pair] = usePair(token, currency);

  return useMemo(() => {
    if (token.equals(currency)) {
      return new Price(currency, currency, '1', '1');
    }
    if (pairState !== PairState.EXISTS || !pair) {
      return new Price(token, currency, '1', '0'); // 0
    } else {
      return pair.priceOf(token, currency);
    }
  }, [pairState, pair, token]);
}

/**
 * Returns the price of pairs in relation to gas coin
 *
 * @param pairs array of pair and total supply of pair
 * @returns object where the key is the address of the pair and the value is the Price
 */
export function usePairsCurrencyPrice(pairs: { pair: Pair; totalSupply: TokenAmount }[]) {
  const chainId = useChainId();
  const currency = WAVAX[chainId];

  // Have the same size
  const tokens0 = pairs.map(({ pair }) => pair.token0);
  const tokens1 = pairs.map(({ pair }) => pair.token1);

  const uniqueTokens: Token[] = [];
  const map = new Map();
  for (let index = 0; index < tokens0.length; index++) {
    const token0 = tokens0[index];
    const token1 = tokens1[index];
    if (!map.has(token0.address)) {
      map.set(token0.address, true);
      uniqueTokens.push(token0);
    }
    if (!map.has(token1.address)) {
      map.set(token1.address, true);
      uniqueTokens.push(token1);
    }
  }

  const tokensPrices = useTokensCurrenyPrice(uniqueTokens);

  return useMemo(() => {
    const pairsPrices: { [key: string]: Price } = {};
    pairs.map(({ pair, totalSupply }) => {
      const token0 = pair.token0;
      const token1 = pair.token1;
      const token0Price = tokensPrices[token0.address] ?? new Price(token0, currency, '1', '0');
      const token1Price = tokensPrices[token1.address] ?? new Price(token1, currency, '1', '0');
      const [token0Amount, token1Amount] = pair.getLiquidityValues(
        totalSupply,
        new TokenAmount(pair.liquidityToken, ONE_TOKEN),
      );
      const token0PairPrice = token0Amount.multiply(token0Price);
      const token1PairPrice = token1Amount.multiply(token1Price);
      const _pairPrice = token0PairPrice.add(token1PairPrice);
      const pairPrice = new Price(pair.liquidityToken, currency, _pairPrice.denominator, _pairPrice.numerator);
      pairsPrices[pair.liquidityToken.address] = pairPrice;
    });
    return pairsPrices;
  }, [pairs, tokensPrices]);
}

/**
 * Returns the price of pair in relation to gas coin
 *
 * @param pair the pair and the total supply of pair
 * @returns the price of pair in relation to gas coin
 */
export function usePairCurrencyPrice(pair: { pair: Pair; totalSupply: TokenAmount }): Price {
  const chainId = useChainId();
  const currency = WAVAX[chainId];

  const _pair = pair.pair;
  const token0 = _pair.token0;
  const token1 = _pair.token1;
  const tokensPrices = useTokensCurrenyPrice([token0, token1]);

  const token0Price = tokensPrices[token0.address] ?? new Price(token0, currency, '1', '0');
  const token1Price = tokensPrices[token1.address] ?? new Price(token1, currency, '1', '0');

  const [token0Amount, token1Amount] = _pair.getLiquidityValues(
    pair.totalSupply,
    new TokenAmount(_pair.liquidityToken, '1'),
  );
  const token0PairPrice = token0Amount.multiply(token0Price);
  const token1PairPrice = token1Amount.multiply(token1Price);

  const _pairPrice = token0PairPrice.add(token1PairPrice);
  return new Price(_pair.liquidityToken, currency, _pairPrice.denominator, _pairPrice.numerator);
}
