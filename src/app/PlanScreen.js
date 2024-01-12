import React, { useState } from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import BackButton from "../components/BackButton";
import checkbox from "../../assets/checked-checkbox.png";
import ContinueButton from "../components/ContinueButton";

export default function PlanScreen({ navigation }) {
  const [selectedPlan, setSelectedPlan] = useState("1 month");
  const [hasSubscribed, setHasSubscribed] = useState(false);

  const handlePlanPress = (plan) => {
    setSelectedPlan(plan);
  };

  const isPlanSelected = (plan) => {
    return selectedPlan === plan;
  };
  const getPlanPrice = (plan) => {
    switch (plan) {
      case "1 month":
        return "١٥،٠٠٠";
      case "6 month":
        return "٧٠،٠٠٠";
      default:
        return "";
    }
  };
  const getPlanMonth = (plan) => {
    switch (plan) {
      case "1 month":
        return "دینار / مانگ";
      case "6 month":
        return "دینار /٦ مانگ";
      default:
        return "";
    }
  };
  const getBenefitDays = (plan) => {
    switch (plan) {
      case "1 month":
        return "١٠";
      case "6 month":
        return "٢٠";
      default:
        return "";
    }
  };
  const handleContinueButton = () => {
    setHasSubscribed(true);
    navigation.navigate("Courses", { hasSubscribed: true });
  };
  return (
    <View style={styles.container}>
      <BackButton extraStyles={styles.backButton} />
      <Text style={styles.headText}>پلانەکان</Text>
      <View style={styles.plansContainer}>
        <TouchableOpacity
          style={[
            styles.planButton,
            isPlanSelected("1 month") && styles.selectedPlan,
          ]}
          onPress={() => handlePlanPress("1 month")}
        >
          <Text
            style={[
              styles.plans,
              isPlanSelected("1 month") && styles.selectedText,
            ]}
          >
            ١ مانگ
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.planButton,
            isPlanSelected("6 month") && styles.selectedPlan,
          ]}
          onPress={() => handlePlanPress("6 month")}
        >
          <Text
            style={[
              styles.plans,
              isPlanSelected("6 month") && styles.selectedText,
            ]}
          >
            ٦ مانگ
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.plan}>
        <Text style={styles.planCurrency}>{getPlanMonth(selectedPlan)}</Text>
        <Text style={styles.planPrice}>{getPlanPrice(selectedPlan)}</Text>
      </View>
      <View style={styles.plansDescription}>
        <Text style={{ alignSelf: "center", fontSize: 14 }}>
          ناوەڕۆکی پلانەکە
        </Text>
        <View style={styles.benefitsContainer}>
          <Text style={styles.benefitsText}>هەموو کۆرسەکان بۆ مانگێک</Text>
          <Image source={checkbox} style={styles.checkbox} />
        </View>
        <View style={styles.benefitsContainer}>
          <Text style={styles.benefitsText}>
            هەڵسەنگاندن لەگەڵ هەموو وانەیەک
          </Text>
          <Image source={checkbox} style={styles.checkbox} />
        </View>
        <View style={styles.benefitsContainer}>
          <Text style={styles.benefitsText}>
            {getBenefitDays(selectedPlan)} ڕۆژ گرەنتی
          </Text>
          <Image source={checkbox} style={styles.checkbox} />
        </View>
      </View>
      <ContinueButton
        label={"بەشداریکردن لە پلان"}
        onPressFunc={handleContinueButton}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  backButton: {
    position: "absolute",
    top: 180,
    left: 20,
  },
  headText: {
    fontWeight: "bold",
    fontSize: 24,
  },
  plansContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "rgb(130,130,130)",
    borderRadius: 16,
    gap: 20,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  planButton: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0)",
  },
  plans: {
    fontSize: 24,
  },
  selectedPlan: {
    backgroundColor: "rgb(237,223,188)",
    borderRadius: 16,
    borderColor: "rgb(130,130,130)",
  },
  selectedText: {
    color: "rgb(227,86,42)",
  },
  plan: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  planCurrency: {
    fontSize: 20,
    color: "rgb(90,90,90)",
  },
  planPrice: {
    fontWeight: "bold",
    fontSize: 40,
  },
  plansDescription: {
    gap: 16,
    paddingHorizontal: 32,
    paddingVertical: 24,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    elevation: 4,
  },
  benefitsContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  benefitsText: {
    fontSize: 16,
  },
  checkbox: {
    width: 32,
    height: 32,
  },
});
