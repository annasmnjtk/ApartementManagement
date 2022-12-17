function Footer() {
  return (
    <>
      {/* <!-- Remove the container if you want to extend the Footer to full width. --> */}
      <div className="container my-5">
        {/* <!-- Footer --> */}
        <footer className="text-center" style={{ backgroundColor: "#8ac9bd" }}>
          {/* <!-- Grid container --> */}
          <div className="container">
            {/* <!-- Section: Links --> */}
            <section className="mt-5">
              {/* <!-- Grid row--> */}
              <div className="row text-center d-flex justify-content-center pt-5">
                {/* <!-- Grid column --> */}
                <div className="col-md-2">
                  <h6 className="text-uppercase font-weight-bold">
                    <a href="/home" className="text-black">
                      About us
                    </a>
                  </h6>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
              </div>
              {/* <!-- Grid row--> */}
            </section>
            {/* <!-- Section: Links --> */}

            <hr className="my-5" />

            {/* <!-- Section: Text --> */}
            <section className="mb-5">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-8">
                  <h2>Apartement Mandirian</h2>
                  <p>
                    Apartement yang memberikan pengalaman tinggal di kerajaan
                    inggris
                  </p>
                </div>
              </div>
            </section>
            {/* <!-- Section: Text --> */}
          </div>
          {/* <!-- Grid container --> */}

          {/* <!-- Copyright --> */}
          <div
            className="text-center p-3"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.2)",
              fontFamily: "Unbounded, cursive",
            }}
          >
            © 2022 Copyright:
            <a className="text-black" href="/home">
              Apartement Mandirian
            </a>
          </div>
          {/* <!-- Copyright --> */}
        </footer>
        {/* <!-- Footer --> */}
      </div>
      {/* <!-- End of .container --> */}
    </>
  );
}

export default Footer;
