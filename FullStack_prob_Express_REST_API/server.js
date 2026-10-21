const express=require("express");

const app=express();

app.use(express.json());

const record=[
  {
    "id": 1,
    "name": "Aman",
    "salary": 35000,
    "department": "IT"
  },
  {
    "id": 2,
    "name": "Priya",
    "salary": 45000,
    "department": "HR"
  }
]

app.get("/employees",(req,res)=>{
    res.send(record);
})

app.get("/employees/:id",(req,res)=>{
    const employee=record.find(emp=>emp.id===parseInt(req.params.id));
    if(!employee){
        return res.status(404).send("employee not found");
    }
    res.send(employee);
})

app.post("/employees",(req,res)=>{
    const employee=record.find(emp=>emp.id===parseInt(req.body.id));
    if(employee){
        return res.status(400).send("employee already exists");
    }
    //if the request data is invalid, return an error with status code 400.
    if(!req.body.name || !req.body.salary || !req.body.department){
        return res.status(400).send("invalid data");
    }
    return res.status(201).send(req.body);
})

app.put("/employees/:id",(req,res)=>{
    const employee=record.find(emp=>emp.id===parseInt(req.params.id));
    if(!employee){
        return res.status(404).send("employee not found");
    }
    employee.name=req.body.name;
    employee.salary=req.body.salary;
    employee.department=req.body.department;
    return res.status(200).send(employee);
})

app.delete("/employees/:id",(req,res)=>{
    const employee=record.find(emp=>emp.id===parseInt(req.params.id));
    if(employee){
        const idx=record.indexOf(employee);
        record.splice(idx,1);
        return res.status(200).send("employee deleted successfully");
    }
    return res.status(404).send("employee not found");
})

app.get("/employees/department/:department",(req,res)=>{
    const employees=record.filter(emp=>emp.department===req.params.department);
    if(employees.length===0){
        return res.status(200).send(employees);
    }
    return res.status(200).send(employees);
})

//Return all employees sorted by salary in ascending order.
//For example, an employee earning ₹25,000 should appear before an employee earning ₹45,000.
//Important: Sorting should not permanently change the original employee array.

app.get("/employees/sort/salary",(req,res)=>{
    const sorted=[...record].sort((a,b)=>a.salary-b.salary);
    return res.status(200).send(sorted);
})

app.listen(3000,()=>{
    console.log("server is running on port 3000");
})
