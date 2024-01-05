import { useEffect, useState } from "react";
import axios from "axios";
import { observer } from "mobx-react";
import { basketStore } from "../stores/BasketStore";

const CourseList = observer(() => {

    const [courseList, setCourseList] = useState([]);
    const [refreshFlag, setRefreshFlag] = useState(0);


    useEffect(() => {
        axios.get("http://localhost:5163/api/Courses").then(response => {
            console.log("gelen response ", response)

            setCourseList(response.data)
        }).catch(err => {
            console.log("error :", err)
        });

    }, [refreshFlag]);


    return <>
        <div className="container">
            <div className="row ">

                {(courseList && courseList.length > 0) && courseList.map(course => {

                    return <>

                        <div className="col-4">
                            <div className="card me-1 my-1">


                                <img src={course.imageUrl} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{course.title}</h5>
                                    <p className="card-text">{course.description}</p>

                                    <p className="card-text">

                                        <span class="badge text-bg-danger">Yalnızca {course.price} TRY</span>


                                    </p>

                                    <button className="btn btn-primary" onClick={() => {
                                        basketStore.setBasketList(
                                            [...basketStore.basketList, course]
                                        )
                                    }}>
                                        Sepete Ekle
                                    </button>


                                </div>
                            </div>
                        </div>


                    </>


                })}


            </div>

        </div>

    </>
})

export default CourseList;