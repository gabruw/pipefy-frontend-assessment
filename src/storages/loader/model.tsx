export interface LoaderInitialState {
    isLoading: boolean;
}

interface LoaderInitialContext {
    state: LoaderInitialState;
    setIsLoading: (isLoading: boolean) => any;
}

export default LoaderInitialContext;
