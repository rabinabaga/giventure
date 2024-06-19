import { Container } from "reactstrap";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import { addTitleThunk } from "../../slices/thunks";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import InputTextArea from "./input-textarea";

const GetThingsDone = () => {
  const dispatch = useDispatch();
  document.title = "Get Things Done"; //for meta title
  const newTaskStateTitle = useSelector((state) => state.NewTask.title);
  console.log("titile new task", newTaskStateTitle);
  const handleSubmit = (e) => {
    dispatch(addTitleThunk(e.target.value));
    e.target.classList.add("hide");
    document;

    document
      .getElementsByClassName("giventure-main-activity")[0]
      .classList.remove("hide");
    document.getElementsByClassName("dot-arrow")[0].classList.add("hide");

    document.getElementsByClassName("icon-container")[0].classList.add("hide");
  };
  const handleInput = (e) => {
    console.log("here");
    //Auto resize
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";

    //test for enter key press
    if (e.key === "Enter") {
      console.log("enter here");

      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <>
      <div className="page-content">
        <Container fluid={true}>
          {/* <BreadCrumb title="Get Things Done" breadcrumbItem="Get Things Done" /> */}

          <div className="get-things-done-container">
            <div class="giventure-main-activity hide">
              <div className="item-1">
                <span className="no-underline-icon">
                  {" "}
                  <i class="ri-map-pin-3-fill"></i>
                </span>
                {newTaskStateTitle}
              </div>
              <div className="item-2">
                Give me some steps to complete it
                <br />
                <span> ( :Press Enter to confirm the step )</span>
              </div>
              <div className="item-3 ">
              <InputTextArea/>
              </div>
            </div>

            {/* <div className="title">Designing the giventure</div> */}

            <div className="dot-arrow">
              <div class="search-box">
                <form>
                  <textarea
                    type="text"
                    onKeyDown={handleInput}
                    placeholder="Hi Anna !! What are you upto today?"
                  />
                </form>
                <span className="icon-container">
                  <i className="ri-arrow-right-double-fill"></i>
                </span>
              </div>
              <div class="dots">
                <span class="dot pink"></span>
                <span class="dot blue"></span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default GetThingsDone;
