import React, { useState, useEffect } from "react";
import { fetchAllOrders } from "src/api/orderAPI";
import { Box } from "src/components/global/Box";
import { Container } from "src/components/global/Container";
import { Order } from "src/interfaces/Order.interface";
import {
  Heading,
  StyledTable,
  TableHead,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  TableButton,
} from "./Admin.styled";

type ExtendedOrder = Order & {
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

type OrderData = {
  orders: ExtendedOrder[];
  page: number;
  count: number;
  totalPages: number;
} | null;

const Admin = () => {
  const [ordersData, setOrdersData] = useState<OrderData>(null);

  useEffect(() => {
    const fetchOrders = async () => {
      const { orders, page, count, totalPages } = await fetchAllOrders({
        page: "1",
        limit: "2",
      });
      setOrdersData({ orders, page, count, totalPages });
    };

    fetchOrders();
  }, []);

  const handleLoadMore = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (ordersData && ordersData.page < ordersData?.totalPages) {
      const nextPage = ordersData.page + 1;
      const { orders, page, count } = await fetchAllOrders({
        page: nextPage.toString(),
        limit: "2",
      });
      setOrdersData({
        orders: [...ordersData.orders, ...orders],
        page,
        count,
        totalPages: ordersData.totalPages,
      });
    }
  };

  return (
    <Box py={90}>
      <Container px={0}>
        <Heading>Orders</Heading>
        {ordersData?.orders && (
          <Box mt={60}>
            <StyledTable>
              <TableHead>
                <TableRow>
                  <TableHeader>Order ID</TableHeader>
                  <TableHeader>Customer Name</TableHeader>
                  <TableHeader>Email</TableHeader>
                  <TableHeader>Address</TableHeader>
                  <TableHeader>Phone</TableHeader>
                  <TableHeader>Message</TableHeader>
                  <TableHeader>Total Products</TableHeader>
                  <TableHeader>Subtotal</TableHeader>
                  <TableHeader>Discount</TableHeader>
                  <TableHeader>Total</TableHeader>
                  <TableHeader>Order Date</TableHeader>
                  <TableHeader>Products</TableHeader>
                </TableRow>
              </TableHead>
              <TableBody>
                {ordersData.orders.map((order) => (
                  <React.Fragment key={order._id}>
                    <TableRow>
                      <TableCell>{order._id}</TableCell>
                      <TableCell>{order.client.fullName}</TableCell>
                      <TableCell>{order.client.email}</TableCell>
                      <TableCell>{order.client.address}</TableCell>
                      <TableCell>{order.client.phoneNumber}</TableCell>
                      <TableCell>{order.client.message}</TableCell>
                      <TableCell>{order.productsInCart.length}</TableCell>
                      <TableCell>${order.subtotal.toFixed(2)}</TableCell>
                      <TableCell>${order.discount.toFixed(2)}</TableCell>
                      <TableCell>${order.total.toFixed(2)}</TableCell>
                      <TableCell>
                        {new Date(order.createdAt).toLocaleDateString()}
                      </TableCell>
                      <TableCell>
                        <StyledTable>
                          <TableHead>
                            <TableRow>
                              <TableHeader>Product ID</TableHeader>
                              <TableHeader>Name</TableHeader>
                              <TableHeader>Price</TableHeader>
                              <TableHeader>Quantity</TableHeader>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {order.productsInCart.map((product) => (
                              <TableRow key={product._id}>
                                <TableCell>{product._id}</TableCell>
                                <TableCell>{product.name}</TableCell>
                                <TableCell>
                                  ${product.price.toFixed(2)}
                                </TableCell>
                                <TableCell>{product.quantity}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </StyledTable>
                      </TableCell>
                    </TableRow>
                  </React.Fragment>
                ))}
              </TableBody>
            </StyledTable>
            {ordersData.page < ordersData.totalPages && (
              <TableButton onClick={handleLoadMore}>Load More</TableButton>
            )}
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Admin;
