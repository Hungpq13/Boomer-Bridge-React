import React from "react";
import { useParams } from "react-router-dom";
import Diphiloabout from "./Diphilo_about";
import ManageUser from "./ManageUserData"; // hoặc import từ nơi bạn lưu mảng

const DiphiloaboutWrapper = () => {
  const { id } = useParams();
  console.log("id param:", id);
  const user = ManageUser.find(u => String(u.id) === String(id));
  console.log("user:", user);
  if (!user) return <div>Không tìm thấy thành viên!</div>;
  return <Diphiloabout ManageUser={[user]} />;
};

export default DiphiloaboutWrapper;