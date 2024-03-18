import { Link } from "react-router-dom";
export default function Payment() {
  return (
    <main className="reg-from-center">
    <div  className="page-name-con">
    <h1 className="page-name-h1">Payment</h1>
    </div>
    
    <section className="reg-page-main-continer">
      <p aria-live="assertive"></p>
     
      <form className="reg-fron-con" onSubmit="">
      

        <button>Submit</button>
      </form>
      <p>
        Already registered?
        <br />
      </p>
      <span className="sign-in-span">
        {/*put router link here*/}
        <Link className="sign-in-link" to="/adminlogin">
          Sign In
        </Link>
      </span>
    </section>
  </main>
  );
}