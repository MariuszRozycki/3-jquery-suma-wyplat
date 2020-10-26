$(document).ready(function () {
  const countSum = $('#count-sum');
  const salary = $('.salary');
  const sumAllEmployees = $('#sum');

  countSum.click(function () {
    let sum = 0;
    for (let personSalary of salary) {
      parseInt(personSalary.innerText);
      sum += parseInt(personSalary.innerText);
    }
    sumAllEmployees.text(sum);
  });
});