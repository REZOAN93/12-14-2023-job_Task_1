import UpPage from "../UpPage/UpPage";

const Blog = () => {
    return (
        <div style={{height:'450px'}}>
            <h1 style={{padding:'50px'}}>This is Blog Page</h1>
            <div style={{ display: "flex", justifyContent: 'end', paddingRight: '30px', marginTop:'200px' ,paddingBottom: '20px' }}>
                <UpPage></UpPage>
            </div>
        </div>
    );
};

export default Blog;