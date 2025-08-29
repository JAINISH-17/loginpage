/* Reset by anjlli */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #4facfe, #00f2fe);
}

.login-container {
  background: #fff;
  padding: 30px;
  width: 350px;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  text-align: center;
}

.login-container h2 {
  margin-bottom: 20px;
  color: #333;
}

.input-group {
  margin-bottom: 15px;
  text-align: left;
}

.input-group label {
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
  color: #555;
}

.input-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
  transition: 0.3s;
}

.input-group input:focus {
  border-color: #4facfe;
  outline: none;
  box-shadow: 0 0 5px rgba(79,172,254,0.6);
}

.btn {
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 8px;
  background: #4facfe;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
}

.btn:hover {
  background: #00c6fb;
}

.error {
  color: red;
  font-size: 14px;
  margin-top: 10px;
  display: none;
}

.extra-links {
  margin-top: 15px;
  font-size: 14px;
}

.extra-links a {
  color: #4facfe;
  text-decoration: none;
}

.extra-links a:hover {
  text-decoration: underline;
}
