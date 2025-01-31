import Accordion from "react-bootstrap/Accordion";

function FAQS() {
  return (
    <>
      <section className="faqs d-flex flex-column gap-2 gap-lg-4">
        <div className="solution_title">
          <h2>Frequently Asked Questions</h2>
        </div>
        <Accordion className="container text-start">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5>1. What services does Vicky Media Solutions offer?</h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Unlimited digital solution by digital excellence we are
                delivering innovative tailored for excellence & growth.
              </p>
              <br></br>
              <ol>
                <li>
                  <strong>Logo Design:</strong> Crafting unique and professional
                  logos tailored to your brand.
                </li>
                <li>
                  <strong>SEO (Search Engine Optimization):</strong> Enhancing
                  your website’s visibility to drive organic traffic.
                </li>
                <li>
                  <strong>Social Media Marketing:</strong> Engaging campaigns to
                  grow your online presence and audience.
                </li>
                <li>
                  <strong>Video Animations:</strong> Stunning 2D and 3D
                  animations to captivate your audience.
                </li>
                <li>
                  <strong>Web Design & Development:</strong> Creating
                  responsive, user-friendly websites for your business.
                </li>
                <li>
                  <strong>Shopify Development:</strong> Custom Shopify solutions
                  to boost your e-commerce performance.
                </li>
                <li>
                  <strong>UI/UX Design:</strong> Intuitive designs that offer an
                  exceptional user experience.
                </li>
                <li>
                  <strong>E-commerce Solutions:</strong> Tailored strategies for
                  launching or scaling online stores.
                </li>
                <li>
                  <strong>Mobile App Development:</strong> High-quality apps
                  designed to meet your business goals
                </li>
                <li>
                  <strong>Branding:</strong> Building a b, memorable brand
                  identity.
                </li>
              </ol>
              <p>
                We’re your one-stop shop for all things creative and digital.
                Let us help take your brand to the next level!
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <h5>
                2: Why should I choose a design studio like Vicky media
                solutions over other agency?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Vicky Media Solutions stands out by delivering customized,
                high-quality solutions that truly reflect your brand. With our
                expert team, attention to detail, and dedication to your
                success, we ensure a seamless experience and results that exceed
                expectations. Your growth is our priority!
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <h5>
                3: How does Vicky media solutions create website content without
                knowing our business plan?
              </h5>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Vicky Media Solutions stands out by delivering customized,
                high-quality solutions that truly reflect your brand. With our
                expert team, attention to detail, and dedication to your
                success, we ensure a seamless experience and results that exceed
                expectations. Your growth is our priority!
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </section>
    </>
  );
}

export default FAQS;
