
const GetAhead = () => {
    return (
        <div className="flex flex-col w-9/12 mx-auto my-40 gap-12">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-2xl font-semibold">Get ahead with Job-Book</h1>
                <p className=" text-center">We're serving up trusted insights and anonymous conversation, <br /> so you'll have the goods you need to succeed.</p>
            </div>
            <div className="flex justify-center items-center gap-16">
                <div className="flex flex-col justify-center items-center">
                    <img src="/public/14598.png" width={'100px'} alt="" />
                    <p>Join your work community</p>
                </div>
                <div className="flex flex-col justify-center items-center" >
                    <img src="/public/find job.png" width={'100px'} alt="" />
                    <p>Find and apply to jobs</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <img src="/public/free-search-icon-3076-thumb.png" width={'100px'} alt="" />
                    <p>Search company reviews</p>
                </div>

            </div>
        </div>
    );
};

export default GetAhead;