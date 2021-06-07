using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Publico.Models
{
    public class Message
    {
        public int Id { get; set; }

        public string UserName { get; set; }
        [Required]
        public string Text { get; set; }
        public DateTime When { get; set; }

        public string UserID { get; set; }
        public virtual AppUser Sender { get; set; }
        public string CharFirstName { get; set; }
        public string CharLastName { get; set; }

    }
}
