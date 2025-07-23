const arr = [1,2,3,4,5,6,7,8,9,10]

const initialVal = 0;

let totalSum = arr.reduce(
    (acc, currVal)=>(acc+currVal), initialVal
);
//acc => accumulator asks only once in the starting the inital value from initial val and do the tasks on each val(currVal) of the array and then store it in acc and return it
console.log(totalSum)

totalSum = arr.reduce(
    (acc, currVal)=>{
        console.log(acc, " ", currVal)
        return (acc+currVal)
    }, initialVal
);
console.log(totalSum)


const courseCart = [
  {
    courseId: 101,
    courseName: "AI & Machine Learning with Python",
    coursePrice: 4999
  },
  {
    courseId: 102,
    courseName: "Full Stack Web Development (MERN)",
    coursePrice: 3999
  },
  {
    courseId: 103,
    courseName: "Data Structures & Algorithms in C++",
    coursePrice: 3499
  },
  {
    courseId: 104,
    courseName: "Cloud Computing with AWS",
    coursePrice: 4499
  },
  {
    courseId: 105,
    courseName: "DevOps with Docker and Kubernetes",
    coursePrice: 3799
  },
  {
    courseId: 106,
    courseName: "Cybersecurity Essentials",
    coursePrice: 2899
  },
  {
    courseId: 107,
    courseName: "Blockchain Development",
    coursePrice: 4299
  },
  {
    courseId: 108,
    courseName: "Android App Development with Kotlin",
    coursePrice: 3199
  },
  {
    courseId: 109,
    courseName: "iOS App Development with Swift",
    coursePrice: 3699
  },
  {
    courseId: 110,
    courseName: "Prompt Engineering for AI Tools",
    coursePrice: 2199
  }
];

const totalCoursePrice = courseCart.reduce( (acc, curr)=> (acc+curr.coursePrice), 0)
console.log(totalCoursePrice)