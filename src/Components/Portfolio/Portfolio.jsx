import UpPage from "../UpPage/UpPage";

const Portfolio = () => {
    return (
        <div style={{ height: '450px' }}>
            <h1 style={{ padding: '50px' }}>This is Portfolio Page</h1>
            <div style={{ display: "flex", justifyContent: 'end', paddingRight: '30px', marginTop: '200px', paddingBottom: '20px' }}>
                <UpPage></UpPage>
            </div>
        </div>
    );
};

export default Portfolio;