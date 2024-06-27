const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 justify-center items-center">
      {children}
    </div>
  );
};

export default Layout;
