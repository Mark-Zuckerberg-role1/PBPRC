const searchInput = document.getElementById("bible-search");
const contentDiv = document.getElementById("bible-content");

searchInput.addEventListener("input", async () => {
	  const query = searchInput.value.trim();
	    if (!query) {
	    	    contentDiv.innerHTML = "<p>Type a passage (e.g., John 3:16) to read Scripture.</p>";
	    	        return;
	    	          }

	    	            const url = `https://bible-api.com/${encodeURIComponent(query)}`;

	    	              try {
	    	              	    const response = await fetch(url);
	    	              	        const data = await response.json();

	    	              	            if (data && data.verses) {
	    	              	            	      let html = `<h3>${data.reference}</h3>`;
	    	              	            	            data.verses.forEach(v => {
	    	              	            	            	        html += `<p>${v.text}</p>`;
	    	              	            	            	              });
	    	              	            	            	                    contentDiv.innerHTML = html;
	    	              	            	            	                        } else {
	    	              	            	            	                        	      contentDiv.innerHTML = "<p>No results found. Try a different reference.</p>";
	    	              	            	            	                        	          }
	    	              	            	            	                        	            } catch (err) {
	    	              	            	            	                        	            	    contentDiv.innerHTML = "<p>Error fetching Bible verse. Try again later.</p>";
	    	              	            	            	                        	            	        console.error(err);
	    	              	            	            	                        	            	          }
	    	              	            	            	                        	            	          });
	    	              	            	            	                        	            }
	    	              	            	            	                        }
	    	              	            	            })
	    	              	            }
	    	              }
	    }
})
