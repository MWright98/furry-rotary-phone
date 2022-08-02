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
        <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
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
            <div>
            <p>${title}</p>
            <p>${employeeName}</p>
            <p>${employeeID}</p>
            <p>${github}</p>
            <p>${employeeEmail}</p>
                        <p>${school | ""}</p>
            </div>
          `;
            }
          )
          .join("")}
  
        
        </div>
      </section>
    `;
};

module.exports = templateData => {
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
      <link rel="stylesheet" href="style.css">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    </head>
  
    <body>
      <header>
        <div class="container flex-row justify-space-between align-center py-3">
          <h1 class="page-title text-secondary bg-dark py-2 px-3">${header.name}</h1>
          <p>${header.name}</p>
        <p>${header.managerEmail}</p>
        <p>${header.managerID}</p>
        <p>${header.managerOffice}</p>
          <nav class="flex-row">
            <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/${header.github
        }">GitHub</a>
          </nav>
        </div>
      </header>
      <main class="container my-5">
      
      ${generateEmployees(employees)}
      </main>
      <footer class="container text-center py-3">
        <h3 class="text-dark">&copy; ${new Date().getFullYear()} by ${header.name}</h3>
      </footer>
    </body>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  </html>
`;
}

// export to index
module.exports = generateHTML;

    </html>
    `;
};