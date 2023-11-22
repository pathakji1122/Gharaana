import React from "react";
import { useEffect } from "react";
const AcceptOrder = ({ orderid }) => {
  const [accept, setAccept] = useState();
  useEffect(() => {
    acceptOrderUrl();
  }, []);
  const acceptOrderUrl = async () => {
    try {
      const authToken = Cookies.get("authToken");
      const response = await axios.post('http://localhost:8081/expert/accept', orderid, {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      });
      setAccept(response.data.status)
      setOrder(response.data.order);

    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };
  return (
    <>
      {accept === false && <div>
        Sorry
      </div>
      }
      {accept === true && <div>
        Order Accepted
      </div>}
    </>
  )
}
export default AcceptOrder;