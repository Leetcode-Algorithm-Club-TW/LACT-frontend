import "./index.css";

interface sildeListProps {
  isLocked: boolean;
}

export default function ListPage({ isLocked }: sildeListProps) {
  return (
    // <div className="h-full bg-gray-600 mx-2">
    //     <p>123</p>
    //     <p>123</p>
    //     <p>123</p>
    //     <p>123</p>
    //     <p>123</p>
    //     <p>123</p>
    //     <p>123</p>
    // </div>

    <div>
      {isLocked ? (
        //   <div className="h-[200px] mt-10 flex flex-col justify-between">
        <div className="h-[200px] flex flex-col justify-between slideListDown bg-gray-400">
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
          <p>123</p>
        </div>
      ) : (
        <div className="h-[200px] flex flex-col justify-between slideListUp bg-gray-400 ">
          
        </div>
      )}
    </div>
  );
}
