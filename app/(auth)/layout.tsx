import Logo from "@/components/logo";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex items-center w-full h-full">
      <div className="flex-1"></div>
      <div className="flex flex-1 flex-col items-center justify-center h-full gap-2 bg-gray-50">
        <Logo className="mb-12" />
        <h1 className="text-center text-4xl font-semibold text-gray-800 mb-8">
          Welcome to Savvy Palette, <br /> Enjoy your time!
        </h1>
        {children}
      </div>
    </main>
  );
};

export default AuthLayout;
