

const Bookmark = ({adddata,times}) => {
    // console.log(adddata)
   
    return (

        <div className=" w-full md:w-1/3">

<div className="font-semibold bg-[#6047EC1A] px-3 py-4 rounded-sm text-2xl text-[#6047EC]">Spent time on read : {times} min</div>

        <div className= "   bg-[#1111110D]  mt-4 rounded-sm px-2 py-2">


           <div className="text-2xl">Bookmarked Blogs :{adddata.length}</div>
          <div>
{
adddata.map((adddata,idx)=>{

return <div key={idx} className="px-2 py-4 bg-[#fff] font-medium text-lg rounded-md m-2">{idx+1}. {adddata.title}.</div>


})
}
</div>
          </div>
        </div>
    );
};

export default Bookmark;