import { ChainId } from '@pangolindex/sdk';
import { useGetLockingPoolsForPoolId, useGetLockingPoolsForPoolZero } from './common';
import { useDummyIsLockingPoolZero, useDummyPangoChefCallback, useDummyPangoChefInfos } from './dummy';
import {
  useEVMPangoChefClaimRewardCallback,
  useEVMPangoChefCompoundCallback,
  useEVMPangoChefStakeCallback,
  useEVMPangoChefWithdrawCallback,
  usePangoChefInfos,
} from './evm';
import {
  useGetPangoChefInfosViaSubgraph,
  useHederaPangoChefClaimRewardCallback,
  useHederaPangoChefCompoundCallback,
  useHederaPangoChefInfos,
  useHederaPangoChefStakeCallback,
  useHederaPangoChefWithdrawCallback,
  useHederaPangochef,
} from './hedera';

export type UsePangoChefInfosHookType = {
  [chainId in ChainId]:
    | typeof usePangoChefInfos
    | typeof useGetPangoChefInfosViaSubgraph
    | typeof useHederaPangoChefInfos
    | typeof useDummyPangoChefInfos
    | typeof useHederaPangochef;
};

export const usePangoChefInfosHook: UsePangoChefInfosHookType = {
  [ChainId.FUJI]: useDummyPangoChefInfos,
  [ChainId.AVALANCHE]: useDummyPangoChefInfos,
  [ChainId.WAGMI]: useDummyPangoChefInfos,
  [ChainId.COSTON]: usePangoChefInfos,
  [ChainId.SONGBIRD]: usePangoChefInfos,
  [ChainId.FLARE_MAINNET]: usePangoChefInfos,
  [ChainId.HEDERA_TESTNET]: useHederaPangochef,
  [ChainId.HEDERA_MAINNET]: useHederaPangochef,
  [ChainId.NEAR_MAINNET]: useDummyPangoChefInfos,
  [ChainId.NEAR_TESTNET]: useDummyPangoChefInfos,
  [ChainId.COSTON2]: usePangoChefInfos,
  [ChainId.ETHEREUM]: useDummyPangoChefInfos,
  [ChainId.POLYGON]: useDummyPangoChefInfos,
  [ChainId.FANTOM]: useDummyPangoChefInfos,
  [ChainId.XDAI]: useDummyPangoChefInfos,
  [ChainId.BSC]: useDummyPangoChefInfos,
  [ChainId.ARBITRUM]: useDummyPangoChefInfos,
  [ChainId.CELO]: useDummyPangoChefInfos,
  [ChainId.OKXCHAIN]: useDummyPangoChefInfos,
  [ChainId.VELAS]: useDummyPangoChefInfos,
  [ChainId.AURORA]: useDummyPangoChefInfos,
  [ChainId.CRONOS]: useDummyPangoChefInfos,
  [ChainId.FUSE]: useDummyPangoChefInfos,
  [ChainId.MOONRIVER]: useDummyPangoChefInfos,
  [ChainId.MOONBEAM]: useDummyPangoChefInfos,
  [ChainId.OP]: useDummyPangoChefInfos,
  [ChainId.EVMOS_TESTNET]: usePangoChefInfos,
  [ChainId.EVMOS_MAINNET]: useDummyPangoChefInfos,
};

export type UsePangoChefStakeCallbackHookType = {
  [chainId in ChainId]:
    | typeof useEVMPangoChefStakeCallback
    | typeof useHederaPangoChefStakeCallback
    | typeof useDummyPangoChefCallback;
};

export const usePangoChefStakeCallbackHook: UsePangoChefStakeCallbackHookType = {
  [ChainId.FUJI]: useEVMPangoChefStakeCallback,
  [ChainId.AVALANCHE]: useEVMPangoChefStakeCallback,
  [ChainId.WAGMI]: useEVMPangoChefStakeCallback,
  [ChainId.COSTON]: useEVMPangoChefStakeCallback,
  [ChainId.SONGBIRD]: useEVMPangoChefStakeCallback,
  [ChainId.FLARE_MAINNET]: useEVMPangoChefStakeCallback,
  [ChainId.HEDERA_TESTNET]: useHederaPangoChefStakeCallback,
  [ChainId.HEDERA_MAINNET]: useHederaPangoChefStakeCallback,
  [ChainId.NEAR_MAINNET]: useDummyPangoChefCallback,
  [ChainId.NEAR_TESTNET]: useDummyPangoChefCallback,
  [ChainId.COSTON2]: useEVMPangoChefStakeCallback,
  [ChainId.ETHEREUM]: useDummyPangoChefCallback,
  [ChainId.POLYGON]: useDummyPangoChefCallback,
  [ChainId.FANTOM]: useDummyPangoChefCallback,
  [ChainId.XDAI]: useDummyPangoChefCallback,
  [ChainId.BSC]: useDummyPangoChefCallback,
  [ChainId.ARBITRUM]: useDummyPangoChefCallback,
  [ChainId.CELO]: useDummyPangoChefCallback,
  [ChainId.OKXCHAIN]: useDummyPangoChefCallback,
  [ChainId.VELAS]: useDummyPangoChefCallback,
  [ChainId.AURORA]: useDummyPangoChefCallback,
  [ChainId.CRONOS]: useDummyPangoChefCallback,
  [ChainId.FUSE]: useDummyPangoChefCallback,
  [ChainId.MOONRIVER]: useDummyPangoChefCallback,
  [ChainId.MOONBEAM]: useDummyPangoChefCallback,
  [ChainId.OP]: useDummyPangoChefCallback,
  [ChainId.EVMOS_TESTNET]: useEVMPangoChefStakeCallback,
  [ChainId.EVMOS_MAINNET]: useDummyPangoChefCallback,
};

export type UsePangoChefClaimRewardCallbackHookType = {
  [chainId in ChainId]:
    | typeof useEVMPangoChefClaimRewardCallback
    | typeof useHederaPangoChefClaimRewardCallback
    | typeof useDummyPangoChefCallback;
};

export const usePangoChefClaimRewardCallbackHook: UsePangoChefClaimRewardCallbackHookType = {
  [ChainId.FUJI]: useEVMPangoChefClaimRewardCallback,
  [ChainId.AVALANCHE]: useEVMPangoChefClaimRewardCallback,
  [ChainId.WAGMI]: useEVMPangoChefClaimRewardCallback,
  [ChainId.COSTON]: useEVMPangoChefClaimRewardCallback,
  [ChainId.SONGBIRD]: useEVMPangoChefClaimRewardCallback,
  [ChainId.FLARE_MAINNET]: useEVMPangoChefClaimRewardCallback,
  [ChainId.HEDERA_TESTNET]: useHederaPangoChefClaimRewardCallback,
  [ChainId.HEDERA_MAINNET]: useHederaPangoChefClaimRewardCallback,
  [ChainId.NEAR_MAINNET]: useDummyPangoChefCallback,
  [ChainId.NEAR_TESTNET]: useDummyPangoChefCallback,
  [ChainId.COSTON2]: useEVMPangoChefClaimRewardCallback,
  [ChainId.ETHEREUM]: useDummyPangoChefCallback,
  [ChainId.POLYGON]: useDummyPangoChefCallback,
  [ChainId.FANTOM]: useDummyPangoChefCallback,
  [ChainId.XDAI]: useDummyPangoChefCallback,
  [ChainId.BSC]: useDummyPangoChefCallback,
  [ChainId.ARBITRUM]: useDummyPangoChefCallback,
  [ChainId.CELO]: useDummyPangoChefCallback,
  [ChainId.OKXCHAIN]: useDummyPangoChefCallback,
  [ChainId.VELAS]: useDummyPangoChefCallback,
  [ChainId.AURORA]: useDummyPangoChefCallback,
  [ChainId.CRONOS]: useDummyPangoChefCallback,
  [ChainId.FUSE]: useDummyPangoChefCallback,
  [ChainId.MOONRIVER]: useDummyPangoChefCallback,
  [ChainId.MOONBEAM]: useDummyPangoChefCallback,
  [ChainId.OP]: useDummyPangoChefCallback,
  [ChainId.EVMOS_TESTNET]: useEVMPangoChefClaimRewardCallback,
  [ChainId.EVMOS_MAINNET]: useDummyPangoChefCallback,
};

export type UsePangoChefWithdrawCallbackHookType = {
  [chainId in ChainId]:
    | typeof useEVMPangoChefWithdrawCallback
    | typeof useHederaPangoChefWithdrawCallback
    | typeof useDummyPangoChefCallback;
};

export const usePangoChefWithdrawCallbackHook: UsePangoChefWithdrawCallbackHookType = {
  [ChainId.FUJI]: useEVMPangoChefWithdrawCallback,
  [ChainId.AVALANCHE]: useEVMPangoChefWithdrawCallback,
  [ChainId.WAGMI]: useEVMPangoChefWithdrawCallback,
  [ChainId.COSTON]: useEVMPangoChefWithdrawCallback,
  [ChainId.SONGBIRD]: useEVMPangoChefWithdrawCallback,
  [ChainId.FLARE_MAINNET]: useEVMPangoChefWithdrawCallback,
  [ChainId.HEDERA_TESTNET]: useHederaPangoChefWithdrawCallback,
  [ChainId.HEDERA_MAINNET]: useHederaPangoChefWithdrawCallback,
  [ChainId.NEAR_MAINNET]: useDummyPangoChefCallback,
  [ChainId.NEAR_TESTNET]: useDummyPangoChefCallback,
  [ChainId.COSTON2]: useEVMPangoChefWithdrawCallback,
  [ChainId.ETHEREUM]: useDummyPangoChefCallback,
  [ChainId.POLYGON]: useDummyPangoChefCallback,
  [ChainId.FANTOM]: useDummyPangoChefCallback,
  [ChainId.XDAI]: useDummyPangoChefCallback,
  [ChainId.BSC]: useDummyPangoChefCallback,
  [ChainId.ARBITRUM]: useDummyPangoChefCallback,
  [ChainId.CELO]: useDummyPangoChefCallback,
  [ChainId.OKXCHAIN]: useDummyPangoChefCallback,
  [ChainId.VELAS]: useDummyPangoChefCallback,
  [ChainId.AURORA]: useDummyPangoChefCallback,
  [ChainId.CRONOS]: useDummyPangoChefCallback,
  [ChainId.FUSE]: useDummyPangoChefCallback,
  [ChainId.MOONRIVER]: useDummyPangoChefCallback,
  [ChainId.MOONBEAM]: useDummyPangoChefCallback,
  [ChainId.OP]: useDummyPangoChefCallback,
  [ChainId.EVMOS_TESTNET]: useEVMPangoChefWithdrawCallback,
  [ChainId.EVMOS_MAINNET]: useDummyPangoChefCallback,
};

export type UsePangoChefCompoundCallbackHookType = {
  [chainId in ChainId]:
    | typeof useEVMPangoChefCompoundCallback
    | typeof useHederaPangoChefCompoundCallback
    | typeof useDummyPangoChefCallback;
};

export const usePangoChefCompoundCallbackHook: UsePangoChefCompoundCallbackHookType = {
  [ChainId.FUJI]: useEVMPangoChefCompoundCallback,
  [ChainId.AVALANCHE]: useEVMPangoChefCompoundCallback,
  [ChainId.WAGMI]: useEVMPangoChefCompoundCallback,
  [ChainId.COSTON]: useEVMPangoChefCompoundCallback,
  [ChainId.SONGBIRD]: useEVMPangoChefCompoundCallback,
  [ChainId.FLARE_MAINNET]: useEVMPangoChefCompoundCallback,
  [ChainId.HEDERA_TESTNET]: useHederaPangoChefCompoundCallback,
  [ChainId.HEDERA_MAINNET]: useHederaPangoChefCompoundCallback,
  [ChainId.NEAR_MAINNET]: useDummyPangoChefCallback,
  [ChainId.NEAR_TESTNET]: useDummyPangoChefCallback,
  [ChainId.COSTON2]: useEVMPangoChefCompoundCallback,
  [ChainId.ETHEREUM]: useDummyPangoChefCallback,
  [ChainId.POLYGON]: useDummyPangoChefCallback,
  [ChainId.FANTOM]: useDummyPangoChefCallback,
  [ChainId.XDAI]: useDummyPangoChefCallback,
  [ChainId.BSC]: useDummyPangoChefCallback,
  [ChainId.ARBITRUM]: useDummyPangoChefCallback,
  [ChainId.CELO]: useDummyPangoChefCallback,
  [ChainId.OKXCHAIN]: useDummyPangoChefCallback,
  [ChainId.VELAS]: useDummyPangoChefCallback,
  [ChainId.AURORA]: useDummyPangoChefCallback,
  [ChainId.CRONOS]: useDummyPangoChefCallback,
  [ChainId.FUSE]: useDummyPangoChefCallback,
  [ChainId.MOONRIVER]: useDummyPangoChefCallback,
  [ChainId.MOONBEAM]: useDummyPangoChefCallback,
  [ChainId.OP]: useDummyPangoChefCallback,
  [ChainId.EVMOS_TESTNET]: useEVMPangoChefCompoundCallback,
  [ChainId.EVMOS_MAINNET]: useDummyPangoChefCallback,
};

export type UseGetLockingPoolsForPoolIdHookType = {
  [chainId in ChainId]:
    | typeof useGetLockingPoolsForPoolZero
    | typeof useGetLockingPoolsForPoolId
    | typeof useDummyIsLockingPoolZero;
};

export const useGetLockingPoolsForPoolIdHook: UseGetLockingPoolsForPoolIdHookType = {
  [ChainId.FUJI]: useDummyIsLockingPoolZero,
  [ChainId.AVALANCHE]: useDummyIsLockingPoolZero,
  [ChainId.WAGMI]: useGetLockingPoolsForPoolId,
  [ChainId.COSTON]: useGetLockingPoolsForPoolZero,
  [ChainId.SONGBIRD]: useGetLockingPoolsForPoolZero,
  [ChainId.FLARE_MAINNET]: useGetLockingPoolsForPoolId,
  [ChainId.HEDERA_TESTNET]: useGetLockingPoolsForPoolId,
  [ChainId.HEDERA_MAINNET]: useGetLockingPoolsForPoolId,
  [ChainId.NEAR_MAINNET]: useDummyIsLockingPoolZero,
  [ChainId.NEAR_TESTNET]: useDummyIsLockingPoolZero,
  [ChainId.COSTON2]: useGetLockingPoolsForPoolId,
  [ChainId.ETHEREUM]: useDummyIsLockingPoolZero,
  [ChainId.POLYGON]: useDummyIsLockingPoolZero,
  [ChainId.FANTOM]: useDummyIsLockingPoolZero,
  [ChainId.XDAI]: useDummyIsLockingPoolZero,
  [ChainId.BSC]: useDummyIsLockingPoolZero,
  [ChainId.ARBITRUM]: useDummyIsLockingPoolZero,
  [ChainId.CELO]: useDummyIsLockingPoolZero,
  [ChainId.OKXCHAIN]: useDummyIsLockingPoolZero,
  [ChainId.VELAS]: useDummyIsLockingPoolZero,
  [ChainId.AURORA]: useDummyIsLockingPoolZero,
  [ChainId.CRONOS]: useDummyIsLockingPoolZero,
  [ChainId.FUSE]: useDummyIsLockingPoolZero,
  [ChainId.MOONRIVER]: useDummyIsLockingPoolZero,
  [ChainId.MOONBEAM]: useDummyIsLockingPoolZero,
  [ChainId.OP]: useDummyIsLockingPoolZero,
  [ChainId.EVMOS_TESTNET]: useDummyIsLockingPoolZero,
  [ChainId.EVMOS_MAINNET]: useDummyIsLockingPoolZero,
};
