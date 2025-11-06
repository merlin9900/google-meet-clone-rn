import QueryProvider from "./queryProvider";

interface ProviderProps {
  children: React.ReactNode;
}

const Providers: React.FC<ProviderProps> = ({ children }) => {
  return <QueryProvider>{children}</QueryProvider>;
};

export default Providers;
