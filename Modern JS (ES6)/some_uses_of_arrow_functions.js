const jobs = [
    { id: 1, isActive: true },
    { id: 2, isActive: true },
    { id: 3, isActive: false },
];

console.log(jobs.filter(function(job) {return job.isActive}));
console.log("------------------");
// using arrow function
console.log(jobs.filter(job => job.isActive));