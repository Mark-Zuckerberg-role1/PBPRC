const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(e){
	  e.preventDefault();

	    fetch(contactForm.action, {
	    	    method: "POST",
	    	        body: new FormData(contactForm)
	    	          })
	    	            .then(response => response.text())
	    	              .then(result => {
	    	              	    if(result === "success"){
	    	              	    	      alert("Message sent! We'll get back to you soon.");
	    	              	    	            contactForm.reset();
	    	              	    	                } else {
	    	              	    	                	      alert("Oops! Something went wrong. Try again later.");
	    	              	    	                	          }
	    	              	    	                	            })
	    	              	    	                	              .catch(error => {
	    	              	    	                	              	    alert("Error sending message.");
	    	              	    	                	              	        console.error(error);
	    	              	    	                	              	          });
	    	              	    	                	              	          });
	    	              	    	                	              })
	    	              	    	                }
	    	              	    }
	    	              })
	    })
})
