"use client";
import { hideNotification } from "@/features/Notification/notificationSlice";
import { RootState } from "@/stores/reduxStore";
import { useEffect } from "react";
import { BsExclamationTriangleFill } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import type { NotificationType } from "@/features/Notification/notificationSlice";

const Notification = () => {
  const dispatch = useDispatch();
  const { show, type, message } = useSelector(
    (state: RootState) => state.notification
  );

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        dispatch(hideNotification());
      }, 2000);
    }
  }, [show]);

  const getColorsByType = (type: NotificationType) => {
    switch (type) {
      case "error":
        return "bg-red ";

      case "success": {
        return "bg-accent";
      }
      default:
        break;
    }
  };

  const getIconByType = (type: NotificationType) => {
    switch (type) {
      case "error":
        return <BsExclamationTriangleFill />;

      case "success": {
        return <FaCheck />;
      }
      default:
        break;
    }
  };

  return (
    <div
      className={`bg-gray-800 absolute top-6 right-6 mb-4 flex w-fit items-center rounded-lg py-4 px-6 text-sm transition  ${getColorsByType(
        type
      )} ${show ? "opacity-100" : "opacity-0"}`}
    >
      {getIconByType(type)}
      <span className="pl-3">{message}</span>
    </div>
  );
};

export default Notification;
