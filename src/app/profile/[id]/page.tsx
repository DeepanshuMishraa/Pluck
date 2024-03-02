const page = ({params}:any) => {
    return (
      <div className="flex flex-col min-h-screen justify-center items-center py-2">
        <h1>Profile Page</h1>
        <hr/>
        <p className="text-4xl mt-4 ">Profile for <span className="text-white bg-orange-600 rounded-md">{params.id}</span></p>
      </div>
    )
  }
  
  export default page
  