const Container = ({
  classNames,
  children,
}: {
  classNames?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={`container mx-auto ${classNames}`}>
      <div className="grid grid-cols-12 gap-6 mb-8">
        <div className="col-span-12 xl:col-span-10 xl:col-start-2">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Container;
