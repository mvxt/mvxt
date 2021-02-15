import Layout from '../components/layout';

export default function Ethos() {
  return (
    <Layout title="Ethos">
      <p>These are the charities and non-profits I donate to.</p>
      <table className="table offwhite-bg">
      <tbody>
        <tr>
          <th width="33%">
            <a href="https://www.amnesty.org/en/">
              <span className="title is-6">Amnesty International</span>
            </a>
          </th>
          <td>
            <span>I am grateful for my freedom and safety. I donate so maybe more people may enjoy what I believe are universal human rights.</span>
          </td>
        </tr>
        <tr>
          <th width="33%">
            <a href="https://www.charitynavigator.org/">
              <span className="title is-6">Charity Navigator</span>
            </a>
          </th>
          <td>
            <span>I care about vetting charities to ensure donations are used for the benefit of the needy, not to line the pockets of the privileged.</span>
          </td>
        </tr>
        <tr>
          <th width="33%">
            <a href="https://www.cawc.org/">
              <span className="title is-6">Connections for Abused Women and Their Children</span>
            </a>
          </th>
          <td>
            <span>I believe in fighting against abuse and helping its victims.</span>
          </td>
        </tr>
        <tr>
          <th width="33%">
            <a href="https://www.doctorswithoutborders.org/">
              <span className="title is-6">Doctors Without Borders</span>
            </a>
          </th>
          <td>
            <span>Doctors are the lifeblood of a healthy society and world. I donate to support the volunteers and doctors of MSF, who respond to crises all over the world.</span>
          </td>
        </tr>
        <tr>
          <th width="33%">
            <a href="https://eji.org/">
              <span className="title is-6">Equal Justice Initiative</span>
            </a>
          </th>
          <td>
            <span>I recognize the economic and social disadvantages of many and want to help bridge this gap.</span>
          </td>
        </tr>
        <tr>
          <th width="33%">
            <a href="https://lifesong.org/">
              <span className="title is-6">Lifesong for Orphans</span>
            </a>
          </th>
          <td>
            <span>I acknowledge how having a loving family and a stable childhood has contributed to my happy life. Orphans are put in difficult situations, usually through no fault of their own - I donate to help them.</span>
          </td>
        </tr>
        <tr>
          <th width="33%">
            <a href="https://mlf.org/">
              <span className="title is-6">Mobile Loaves & Fishes</span>
            </a>
          </th>
          <td>
            <span>Homelessness is a complicated subject, but I firmly believe nobody deserves to starve or freeze to death regardless of the circumstances. I donate to MLF, who provides life-sustaining services (food, clothing, etc.) to homeless people.</span>
          </td>
        </tr>
        <tr>
          <th width="33%">
            <a href="https://www.navysealfoundation.org/">
              <span className="title is-6">Navy SEAL Foundation</span>
            </a>
          </th>
          <td>
            <span>I hate war, but I love those who choose to lay down their lives for their country. I donate money to aid them.</span>
          </td>
        </tr>
        <tr>
          <th width="33%">
            <a href="https://prh.org/">
              <span className="title is-6">Physicians for Reproductive Health</span>
            </a>
          </th>
          <td>
            <span>I realize the need for better access to healthcare and sex education. I especially want women to have access to the resources and help they need for family planning so that the children born into the world are wanted.</span>
          </td>
        </tr>
        <tr>
          <th width="33%">
            <a href="https://www.seo-usa.org/">
              <span className="title is-6">Sponsors for Education Opportunity</span>
            </a>
          </th>
          <td>
            <span>I understand the value of education and how the lack of access to it impedes success for many. I wish to live in a society with more educated people, and I actively donate towards this cause.</span>
          </td>
        </tr>
      </tbody>
      </table>
    </Layout>
  );
};
