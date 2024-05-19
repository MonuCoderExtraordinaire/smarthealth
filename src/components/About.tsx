import Image from "next/image";

export default function AboutUs() {
  return (
    <div>
      <div
        style={{
          backgroundImage: "url(/Aboutimage.jpg)",
          margin: "50px",
        }}
      >
        <div
          style={{
            color: "#006e89",
            textAlign: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            fontWeight: "600",
            fontSize: "60px",
            height: "370px",
          }}
        >
          <p>About Healthtipede</p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{
            width: "400px",
            color: "#8576FF",
            fontSize: "30px",
          }}
        >
          <p>
            Join us in our mission to empower hearts, revolutionize health, and
            create a future where well-being knows no bounds.
          </p>
        </div>
        <div
          style={{
            width: "500px",
          }}
        >
          <h1 style={{ fontSize: "28px" }}>About Us</h1>
          <p
            style={{
              fontSize: "16px",
              display: "flex",
              marginTop: 10,
              marginBottom: 20,
            }}
          >
            Welcome to Healthtipede, your trusted source for smart health
            monitoring and cardiovascular disease management. At Healthtipede,
            we are dedicated to empowering individuals to take control of their
            cardiovascular health through innovative technology and personalized
            guidance.
          </p>

          <Image
            alt={"doctor's photo"}
            height={300}
            width={600}
            src={"/img1.jpeg"}
          />

          <br />
          <h1 style={{ fontSize: "28px" }}>Our Mission</h1>
          <br />
          <p>
            Our mission at Healthtipede is to revolutionize the way people
            manage their cardiovascular health. We strive to provide accessible,
            accurate, and actionable information to help individuals prevent,
            detect, and manage cardiovascular diseases effectively.
          </p>
        </div>
      </div>
      <div
        style={{
          marginTop: "60px",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{
            width: "400px",
            height: "100%",
            color: "#FB9AD1",
            fontSize: "30px",
            position: "sticky",
            top: "10%",
          }}
        >
          <p>
            Caring for hearts, shaping healthier tomorrows. Together, we'll
            journey toward a future of vitality and well-being.
          </p>
        </div>

        <div
          style={{
            width: "500px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "1200px",
          }}
        >
          <div>
            <Image
              style={{}}
              alt={"doctor's photo"}
              height={300}
              width={500}
              src={"/doctor.jpg"}
            />
          </div>

          <div>
            <h1 style={{ fontSize: "28px" }}>What We Offer</h1>
            <p>
              <b>A</b>. Smart Health Monitoring: Our platform utilizes
              cutting-edge technology to monitor key cardiovascular health
              metrics, providing real-time insights and personalized
              recommendations.
            </p>
            <p>
              <b>B</b>. Educational Resources: We offer a wealth of educational
              resources, including articles, videos, and interactive tools, to
              help users understand cardiovascular diseases and adopt healthy
              lifestyle habits.
            </p>
            <p>
              <b>C</b>. Personalized Guidance: Through personalized health
              assessments and tailored recommendations, we empower users to make
              informed decisions about their cardiovascular health.
            </p>
          </div>
          <div>
            <h1 style={{ fontSize: "28px" }}>Our Team</h1>
            <p>
              Behind Healthtipede is a team of passionate healthcare
              professionals, technologists, and researchers dedicated to making
              a positive impact on global health. Meet our team of experts who
              are committed to driving innovation and improving health outcomes
              for all.
            </p>
          </div>
          <div>
            <h1 style={{ fontSize: "28px" }}>Get Involved</h1>
            <p>
              Join the Healthtipede community and embark on your journey towards
              better cardiovascular health today. Whether you're looking to
              prevent heart disease, manage an existing condition, or simply
              live a healthier life, we're here to support you every step of the
              way.
            </p>
          </div>

          <p>
            {/* That dream became a reality with the formation of a medical clinic */}
          </p>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#FFEBB2",
          display: "flex",
          justifyContent: "space-around",
          color: "black",
          fontWeight: "200",
          fontSize: "25px",
          padding: 6,
        }}
      >
        <div>
          <p>Contact Us</p>
          <br />
          <p>General Inquiries</p>
          <br />
          <p>Mukul Garg</p>
          <br />
          <p>+91 7611825169</p>
        </div>
        <div>
          <p>Contact Us</p>
          <br />
          <p>General Inquiries</p>
          <br />
          <p>Monu Yadav</p>
          <br />
          <p>+91 9119375940</p>
          
        </div>
        <div>
          <p>Contact Us</p>
          <br />
          <p>General Inquiries</p>
          <br />
          <p>Neeraj Awasthi</p>
          <br />
          <p>+91 6393535481</p>
          
        </div>
        <div>
          <p>Contact Us</p>
          <br />
          <p>General Inquiries</p>
          <br />
          <p>Yash Meena</p>
          <br />
          <p>+91 8947958284</p>
        </div>
      </div>
    </div>
  );
}
