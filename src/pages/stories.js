import Story from "./story";
import DatafromApi from "../utils/datafetch";

const Stories = (props) => {
  const { isLoading, stories } = DatafromApi(props.type);

  return (
    <div>
      {isLoading ? (
        <p className="loading">Loading...</p>
      ) : (
        <>
          {Object(stories).map(({ data } = stories, id) => (
            <Story key={id} contentId={id} story={data} />
          ))}
        </>
      )}
    </div>
  );
};

export default Stories;
