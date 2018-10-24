using System.Collections.Generic;
using System.Linq;
using Api_API.Data;
using Api_API.Models;
using Microsoft.AspNetCore.Mvc;

namespace Api_API.Controllers {
    [Route ("api/[controller]")]
    [ApiController]
    public class CustomerController : Controller {
        private readonly DataContext _context;

        // initiate database context
        public CustomerController (DataContext context) {
            _context = context;
        }

        [HttpGet]
        [Route ("getAllCustomers")]
        public IEnumerable<Customer> GetAll () {
            // fetch all contact records 
            return _context.CustomerTable.ToList ();
        }

        [HttpGet]
        [Route ("getCustomer")]
        public IActionResult GetById (int Id) {
           // var id = 2;
            // filter contact records by contact id
            var item = _context.CustomerTable.FirstOrDefault (t => t.Id == Id);
            if (item == null) {
                return NotFound ();
            }
            return new ObjectResult (item);
        }

        [HttpPost]
        [Route ("addCustomer")]
        public IActionResult Create ([FromBody] Customer item) {
            // set bad request if contact data is not provided in body
            // use try catch for exception handling or create global exception handler
            if (item == null) {
                return BadRequest ();
            }

            _context.CustomerTable.Add (new Customer {
                CustomerName = item.CustomerName,
                    CustomerCode = item.CustomerCode
            });
            _context.SaveChanges ();

            return Ok (new { message = "Customer is added successfully." });

        }

        [HttpPut ("{id}")]
        [Route ("updateCustomer")]
        public IActionResult Update (long id, [FromBody] Customer item) {
            // set bad request if contact data is not provided in body
            if (item == null || id == 0) {
                return BadRequest ();
            }

            var customer = _context.CustomerTable.FirstOrDefault (t => t.Id == id);
            if (customer == null) {
                return NotFound ();
            }

            customer.CustomerName = item.CustomerName;
            customer.CustomerCode = item.CustomerCode;

            _context.CustomerTable.Update (customer);
            _context.SaveChanges ();
            return Ok (new { message = "Customer is updated successfully." });
        }

        [HttpDelete ("{id}")]
        [Route ("deleteCustomer")]
        public IActionResult Delete (long id) {
            var customer = _context.CustomerTable.FirstOrDefault (t => t.Id == id);
            if (customer == null) {
                return NotFound ();
            }

            _context.CustomerTable.Remove (customer);
            _context.SaveChanges ();
            return Ok (new { message = "Customer is deleted successfully." });
        }
    }
}