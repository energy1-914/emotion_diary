import { useNavigate } from "react-router-dom";
import MyButton from "./MyButton";

const DiaryItem = ({ ...i }) => {
  const navigate = useNavigate();
  const goDetail = () => {
    navigate(`/diary/${i.id}`);
  };
  const goEdit = () => {
    navigate(`/edit/${i.id}`);
  };
  const strDate = new Date(parseInt(i.date)).toLocaleDateString();
  return (
    <div className="DiaryItem">
      <div
        onClick={goDetail}
        className={[
          "emotion_img_wrapper",
          `emotion_img_wrapper_${i.emotion}`,
        ].join(" ")}
      >
        <img src={process.env.PUBLIC_URL + `assets/emotion${i.emotion}.png`} />
      </div>
      <div className="info_wrapper" onClick={goDetail}>
        <div className="diary_date">{strDate}</div>
        <div className="diary_content_preview">{i.content.slice(0, 25)}</div>
      </div>
      <div className="btn_wrapper">
        <MyButton text={"수정하기"} onClick={goEdit} />
      </div>
    </div>
  );
};
export default DiaryItem;
