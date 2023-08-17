
export default function TitelsSection({styles}) {
    return (
        <div className={styles}>
            <div className=" wrap container__titels grid grid-cols-3">
                <div className=" border-b-2 border-red-600" ><h2>Recently Posted</h2></div>
                <div></div>
                <div><h2>Top Authors</h2></div>
            </div>
        </div>
    );
}