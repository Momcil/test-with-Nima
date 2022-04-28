
import styled from "styled-components";
import { useState } from "react";

const ProjectsList = [
    {
        ID: 1,
        Project_Name:"Cooling System",
        Client_Name: "FreezingTech",
        Status: "In progress",
        Emploeyee_Worker_Name: "John",
        Emploeyee_Worker_Work_Hours: "4",
        Start_Date: "22-04-2022",
        End_Date: "30-04-2022",
        Sum_Hours: 2,
        hasDetails : true,
    },
    {
        ID: 2,
        Project_Name:"GOGO",
        Client_Name: "JUMPHIGH",
        Status: "Done",
        Emploeyee_Worker_Name: "Otto",
        Emploeyee_Worker_Work_Hours: "5",
        Start_Date: "10-05-2022",
        End_Date: "20-05-2022",
        Sum_Hours: 5,
        hasDetails : true,
    },
    {
        ID: 3,
        Project_Name:"AAA",
        Client_Name: "Client-Client",
        Status: "Done",
        Emploeyee_Worker_Name: "Anna",
        Emploeyee_Worker_Work_Hours: "5",
        Start_Date: "10-05-2022",
        End_Date: "20-05-2022",
        Sum_Hours: 5,
        hasDetails : true,
    } 
]
    
    //-------------------
console.log(ProjectsList)
    
   //--------------------

function AllProjectss(){
   const [details, setDetails] = useState([])

function Toggle(projectID){
    const newDetails = [...ProjectsList]
    newDetails[projectID].hasDetails = newDetails[projectID].hasDetails ? false : true
    setDetails(newDetails)
}


    return (

        <>
            <h1 className="Detailed">Project details</h1>
                {details.map((project,index) => (
         console.log(project),            
                    project.hasDetails ? 
                    <Styledcard>
                        <li key={index}>
                            <p>Project ID: {project.ID}</p> 
                            <p>Project Name: {project.Project_Name} Satus: {project.Status}</p>
                            <p>Client Name: {project.Client_Name}</p>
                            <p>Eployee Name: {project.Emploeyee_Worker_Name}</p>
                            <p>Eployee Work-Hours: {project.Emploeyee_Worker_Work_Hours}</p>
                            <p>Start Date: {project.Start_Date} End Date: {project.End_Date}</p> 
                            <button className="btn" id={project.ID} onClick={() => Toggle(project.ID - 1)}>
                                {project.hasDetails ? "close" : "show more"}
                            </button>
                        </li>
                        
                    </Styledcard>
                    :  
                    <Styledcard>
                    <li key={index}>
                        <p>Project ID: {project.ID}</p> 
                        <p>Project Name: {project.Project_Name} Satus: {project.Status}</p>
                        <p>Client Name: {project.Client_Name}</p>
                        <button className="btn" id={project.ID}  onClick={() => Toggle(project.ID - 1)}>
                            {project.hasDetails ? "close" : "show more"}
                        </button>
                    </li>
                    
                </Styledcard>
                
                ))}
        </>
        
    ) 
}

const Styledcard = styled.ul`
    display: flex;
    margin-top: 1em;
    margin: 1rem auto;
    justify-content: center;
    flex-direction: column;
    row-gap: 1em;
    width: 70%;
    list-style: none;
    background-color: #489CB7;
    color: #E5E5E5;
    padding-top: 2em;
    padding-bottom: 2em;
    border-radius: 5px;
`


export default AllProjectss