import Part from "./Part/Part"

function Content(props) {

    const { courseInfo } = props;

    return (
        <>
            <Part courseInfo={courseInfo} />
        </>
    )
}

export default Content