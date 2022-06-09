import React from "react";
import "./story.css";

const Story = (props) => {
  const { contentId, story } = props;
  const { by, score, title, time, url } = story;
  const storyTime = new Date(time * 1000).toLocaleDateString("en-US", {
    hour: "numeric",
    minute: "numeric",
  });
  let timeDifference = new Date().getHours() - new Date(storyTime).getHours();
  const getStoryTime =
    timeDifference < 1
      ? Math.abs(new Date().getMinutes() - new Date(storyTime).getMinutes()) +
        " minutes ago"
      : Math.abs(timeDifference) + " hours ago";

  return (
    <React.Fragment>
      <div>
        <table>
          <tr>
            <td>{contentId + 1}.</td>
            <td className="title">
              <a href={url}> {title}</a>
            </td>
          </tr>

          <tr>
            <td></td>
            <td className="sub-texts">
              {score + " points by " + by + " " + getStoryTime}
            </td>
          </tr>
          <tr>
            <td></td>
          </tr>
        </table>
      </div>
    </React.Fragment>
  );
};

export default Story;
