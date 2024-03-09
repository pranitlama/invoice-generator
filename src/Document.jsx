import React from "react";

import {
  Page,
  Text,
  View,
  Document,
  Image,
  StyleSheet,
} from "@react-pdf/renderer";

// const tableData = [
//   { id: 1, name: "John Doe", age: 30, city: "New York" },
//   { id: 2, name: "Jane Smith", age: 25, city: "Los Angeles" },
//   { id: 3, name: "Tom Brown", age: 35, city: "Chicago" },
// ];

const styles = StyleSheet.create({
  textcolor: {
    color: "#535b61",
  },
  invoiceHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 30,
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: "center",
    objectFit: "cover",
  },

  hr: {
    height: 1,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },

  tableRow: {
    flexDirection: "row",
  },
  tableCell: {
    margin: 5,

    padding: 5,

    width: 120,

    color: "#535b61",
    textAlign: "center",
    fontSize: 15,
  },

  bordert: {
    borderTopWidth: 1,
    borderTopColor: "#535b61",
  },
  tablecontainer: {
    flex: 1,
    justifyContent: "end",
    alignItems: "center",
    // backgroundColor: "red",
  },
});

// Create Document Component

export default function MyDocument({
  clientinfo,
  logo,
  userinfo,
  date,
  invoiceid,
  tax,
  alltransaction,
}) {
  const totalAmount = alltransaction.reduce((total, object) => {
    const totalForTransaction = object.rate * object.quantity;

    return total + totalForTransaction;
  }, 0);

  const taxamt = ((tax ? tax : 0) / 100) * totalAmount;

  return (
    <Document pageMode="fullScreen">
      <Page size="A4" style={styles.page}>
        <View style={styles.invoiceHeader}>
          <Image src={logo} style={styles.image} />
          <Text
            style={{
              color: "#0c2f54",
              fontWeight: 500,
              fontSize: 27,
              textAlign: "right",
              alignSelf: "flex-end",
            }}
          >
            Invoice
          </Text>
        </View>
        <View style={styles.hr}></View>
        <View style={styles.invoiceHeader}>
          <View>
            <Text style={styles.textcolor}>Invoice No: {invoiceid}</Text>
          </View>
          <View>
            <Text style={styles.textcolor}>Date: {date}</Text>
          </View>
        </View>
        <View style={styles.hr}></View>
        <View style={styles.invoiceHeader}>
          <View>
            <Text style={styles.textcolor}>Invoice to:</Text>
            <Text style={styles.textcolor}>{clientinfo.clientname}</Text>
            <Text style={styles.textcolor}>{clientinfo.clientaddress}</Text>
            <Text style={styles.textcolor}>{clientinfo.clientemail}</Text>
            <Text style={styles.textcolor}>{clientinfo.clientcountry}</Text>
          </View>

          <View>
            <Text style={[styles.textcolor]}>Invoice from:</Text>
            <Text style={styles.textcolor}>{userinfo.username}</Text>
            <Text style={styles.textcolor}>{userinfo.useraddress}</Text>
            <Text style={styles.textcolor}>{userinfo.useremail}</Text>
            <Text style={styles.textcolor}>{userinfo.usercountry}</Text>
          </View>
        </View>
        <View style={styles.hr}></View>

        <View style={styles.tablecontainer}>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Service</Text>
            <Text style={styles.tableCell}>Description</Text>
            <Text style={styles.tableCell}>Rate</Text>
            <Text style={styles.tableCell}>Quantity</Text>
            <Text style={styles.tableCell}>Total</Text>
          </View>

          {alltransaction.map((item, index) => {
            return (
              <View key={index} style={styles.tableRow}>
                <Text style={styles.tableCell}>{item.service}</Text>
                <Text style={styles.tableCell}>{item.description}</Text>
                <Text style={styles.tableCell}>{item.rate}</Text>
                <Text style={styles.tableCell}>{item.quantity}</Text>
                <Text style={styles.tableCell}>
                  {item.rate * item.quantity}
                </Text>
              </View>
            );
          })}

          <View
            style={[
              styles.tableRow,
              { borderTopWidth: 1 },
              { borderTopColor: "#535b61" },
            ]}
          >
            <Text style={[styles.tableCell]}></Text>
            <Text style={styles.tableCell}></Text>
            <Text style={styles.tableCell}></Text>
            <Text style={styles.tableCell}>Sub Total(Rs):</Text>
            <Text style={styles.tableCell}>{totalAmount}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}></Text>
            <Text style={styles.tableCell}></Text>
            <Text style={styles.tableCell}></Text>
            <Text style={styles.tableCell}>Tax(%):</Text>
            <Text style={styles.tableCell}>
              {tax ? tax : 0}(Rs{taxamt})
            </Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}></Text>
            <Text style={styles.tableCell}></Text>
            <Text style={styles.tableCell}></Text>
            <Text style={styles.tableCell}>Total(Rs):</Text>
            <Text style={styles.tableCell}>{taxamt + totalAmount}</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}
