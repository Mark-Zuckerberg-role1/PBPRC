<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

	    $name    = strip_tags(trim($_POST["name"]));
	        $email   = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
	            $subject = strip_tags(trim($_POST["subject"]));
	                $message = strip_tags(trim($_POST["message"]));

	                    $to = "geraldannan74@gmail.com"; // your email
	                        $headers = "From: $name <$email>\r\n" .
	                                       "Reply-To: $email\r\n" .
	                                                      "Content-Type: text/plain; charset=UTF-8";

	                                                          if(mail($to, $subject, $message, $headers)){
	                                                          	        echo "success";
	                                                          	            } else {
	                                                          	            	        echo "error";
	                                                          	            	            }
	                                                          	            	            } else {
	                                                          	            	            	    echo "Invalid request";
	                                                          	            	            	    }
	                                                          	            	            	    ?>
	                                                          	            	            }
	                                                          	            }
	                                                          }
}
