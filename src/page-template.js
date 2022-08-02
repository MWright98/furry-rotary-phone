// create the about section
// const generateAbout = aboutText => {

//     const {name, managerEmail, managerID, managerOffice} = aboutText;

//     return `
//       <section class="my-3" id="about">
//         <h2 class="text-dark bg-primary p-2 display-inline-block">About Me</h2>
//         <p>${name}</p>
//         <p>${managerEmail}</p>
//         <p>${managerID}</p>
//         <p>${managerOffice}</p>
//       </section>
//     `;
// };

const generateEmployees = (employeesArr) => {
  return `
      <section class="my-3" id="portfolio">
        
        <div class="flex-row justify-space-between">
        ${employeesArr

          .map(
            ({
              title,
              employeeName,
              employeeID,
              github,
              school,
              employeeEmail,
            }) => {
              return `
              <div class="card">
              <div class="card-body">
            <p class="card-title">${title}</p>
            <p class="card-text">${employeeName}</p>
            <p class="card-text">${employeeID}</p>
            <p class="card-text">${github}</p>
            <p class="card-text">${employeeEmail}</p>
                        <p>${school}</p>
            </div>
            </div>

            
          `;
            }
          )
          .join("")}
  
        
        </div>
      </section>
    `;
};

module.exports = (templateData) => {
  // destructure page data by section
  const { employees, about, ...header } = templateData;

  return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    </head>
  
    <body>
      
        
      
      <section class="container">
      <div class="card">
        <div class="card-body">
          <h1 class="card-title">${header.name}</h1>
        <p class="card-class="card-text"">${header.managerEmail}</p>
        <p class="card-class="card-text"">${header.managerID}</p>
        <p class="card-class="card-text"">${header.managerOffice}</p>
        </div>
        </div>
        
      ${generateEmployees(employees)}
      </section>
      
      
    </body>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>

    </html>
    `;
};
