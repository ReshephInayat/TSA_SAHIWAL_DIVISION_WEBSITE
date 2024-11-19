const generateSection = (
  title: string,
  items: { label: string; value: string }[] | string[]
) => {
  return (
    <div>
      <h3 className="text-xl text-red-600 font-bold">{title}</h3>
      <ul className="space-y-2 text-gray-700">
        {Array.isArray(items)
          ? items.map((item, index) => (
              <li key={index} className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-red-400 mr-3"></span>
                {typeof item === "string" ? item : item.label}
                {typeof item !== "string" && (
                  <span className="text-red-600 space-x-5 pl-2">
                     {item.value}
                  </span>
                )}
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};

export const descriptions: Record<string, JSX.Element> = {
  Chishtian: (
    <div className="space-y-2">
      {generateSection("Family Structure", [
        { label: "Joint", value: "30%" },
        { label: "Separate", value: "20%" },
      ])}

      {generateSection("Religion", [
        { label: "Christianity", value: "50%" },
        { label: "Islam", value: "0%" },
        { label: "Hinduism", value: "0%" },
        { label: "Others", value: "0%" },
      ])}

      {generateSection("Local Languages", [
        "Urdu",
        "Punjabi",
        "Pashto",
        "Hindko",
      ])}

      {generateSection("Water Source for Household Use", [
        { label: "Borehole", value: "10%" },
        { label: "Govt", value: "36%" },
        { label: "Tanker", value: "4%" },
        { label: "Hand Pump", value: "0%" },
      ])}

      {generateSection("Fuel Source for Cooking", [
        { label: "Gas Meter", value: "26%" },
        { label: "Cylinder", value: "9%" },
        { label: "Wood", value: "15%" },
        { label: "Kerosene Stove", value: "0%" },
      ])}

      {generateSection("Residence", [
        { label: "Owned", value: "50%" },
        { label: "Rented", value: "0%" },
        { label: "Leased", value: "0%" },
      ])}

      {generateSection("Structure of Residence", [
        { label: "Brick Houses", value: "50%" },
        { label: "Mud Houses", value: "0%" },
      ])}

      {generateSection("Electricity Supply", [
        { label: "Solar", value: "14%" },
        { label: "Govt Meters", value: "36%" },
        { label: "Sharing", value: "0%" },
        { label: "Others", value: "0%" },
      ])}

      {generateSection("Age", [
        { label: "Children", value: "79" },
        { label: "Youth", value: "67" },
        { label: "Above Adults", value: "72" },
      ])}

      {generateSection("Gender", [
        { label: "Male", value: "113" },
        { label: "Female", value: "105" },
        { label: "Transgender", value: "0" },
      ])}

      {generateSection("Marital Status", [
        { label: "Single", value: "120" },
        { label: "Married", value: "98" },
        { label: "Widow", value: "0" },
        { label: "Divorced", value: "0" },
        { label: "Separated", value: "0" },
      ])}

      {generateSection("CNIC", [
        { label: "Yes", value: "121" },
        { label: "No", value: "0" },
      ])}
    </div>
  ),
  Jinnah_Abadi: (
    <div className="space-y-2">
      {generateSection("Family Structure", [
        { label: "Joint", value: "50%" },
        { label: "Separate", value: "0%" },
      ])}

      {generateSection("Religion", [
        { label: "Christianity", value: "36%" },
        { label: "Islam", value: "14%" },
        { label: "Hinduism", value: "0%" },
        { label: "Others", value: "0%" },
      ])}

      {generateSection("Local Languages", [
        "Urdu",
        "Punjabi",
        "Pashto",
        "Hindko",
      ])}

      {generateSection("Water Source for Household Use", [
        { label: "Borehole", value: "10%" },
        { label: "Govt", value: "12%" },
        { label: "Tanker", value: "39%" },
        { label: "Hand Pump", value: "0%" },
      ])}

      {generateSection("Fuel Source for Cooking", [
        { label: "Gas Meter", value: "0%" },
        { label: "Cylinder", value: "0%" },
        { label: "Wood", value: "50%" },
        { label: "Kerosene Stove", value: "0%" },
      ])}

      {generateSection("Residence", [
        { label: "Owned", value: "45%" },
        { label: "Rented", value: "5%" },
        { label: "Leased", value: "0%" },
      ])}

      {generateSection("Structure of Residence", [
        { label: "Brick Houses", value: "47%" },
        { label: "Mud Houses", value: "3%" },
      ])}

      {generateSection("Electricity Supply", [
        { label: "Solar", value: "0%" },
        { label: "Govt Meters", value: "50%" },
        { label: "Sharing", value: "0%" },
        { label: "Others", value: "0%" },
      ])}

      {generateSection("Age", [
        { label: "Children", value: "26" },
        { label: "Youth", value: "75" },
        { label: "Above Adults", value: "85" },
      ])}

      {generateSection("Gender", [
        { label: "Male", value: "115" },
        { label: "Female", value: "71" },
        { label: "Transgender", value: "0" },
      ])}

      {generateSection("Marital Status", [
        { label: "Single", value: "93" },
        { label: "Married", value: "87" },
        { label: "Widow", value: "6" },
        { label: "Divorced", value: "0" },
        { label: "Separated", value: "0" },
      ])}

      {generateSection("CNIC", [
        { label: "Yes", value: "151" },
        { label: "No", value: "0" },
      ])}
    </div>
  ),
  Essa_Nagri: (
    <div className="space-y-2">
      {generateSection("Family Structure", [
        { label: "Joint", value: "31%" },
        { label: "Separate", value: "19%" },
      ])}

      {generateSection("Religion", [
        { label: "Christianity", value: "38%" },
        { label: "Islam", value: "18%" },
        { label: "Hinduism", value: "0%" },
        { label: "Others", value: "0%" },
      ])}

      {generateSection("Local Languages", [
        "Urdu",
        "Punjabi",
        "Pashto",
        "Hindko",
      ])}

      {generateSection("Water Source for Household Use", [
        { label: "Borehole", value: "1%" },
        { label: "Govt", value: "2%" },
        { label: "Tanker", value: "0%" },
        { label: "Hand Pump", value: "0%" },
      ])}

      {generateSection("Fuel Source for Cooking", [
        { label: "Gas Meter", value: "40%" },
        { label: "Cylinder", value: "9%" },
        { label: "Wood", value: "10%" },
        { label: "Kerosene Stove", value: "0%" },
      ])}

      {generateSection("Residence", [
        { label: "Owned", value: "33%" },
        { label: "Rented", value: "17%" },
        { label: "Leased", value: "0%" },
      ])}

      {generateSection("Structure of Residence", [
        { label: "Brick Houses", value: "46%" },
        { label: "Mud Houses", value: "4%" },
      ])}

      {generateSection("Electricity Supply", [
        { label: "Solar", value: "0%" },
        { label: "Govt Meters", value: "50%" },
        { label: "Sharing", value: "0%" },
        { label: "Others", value: "0%" },
      ])}

      {generateSection("Age", [
        { label: "Children", value: "101" },
        { label: "Youth", value: "43" },
        { label: "Above Adults", value: "84" },
      ])}

      {generateSection("Gender", [
        { label: "Male", value: "119" },
        { label: "Female", value: "109" },
        { label: "Transgender", value: "0" },
      ])}

      {generateSection("Marital Status", [
        { label: "Single", value: "129" },
        { label: "Married", value: "97" },
        { label: "Widow", value: "0" },
        { label: "Divorced", value: "0" },
        { label: "Separated", value: "0" },
      ])}

      {generateSection("CNIC", [
        { label: "Yes", value: "117" },
        { label: "No", value: "7" },
      ])}
    </div>
  ),
  Chak_92_6R: (
    <div className="space-y-2">
      {generateSection("Family Structure", [
        { label: "Joint", value: "35%" },
        { label: "Separate", value: "13%" },
      ])}

      {generateSection("Religion", [
        { label: "Christianity", value: "46%" },
        { label: "Islam", value: "2%" },
        { label: "Hinduism", value: "0%" },
        { label: "Others", value: "0%" },
      ])}

      {generateSection("Local Languages", [
        "Urdu",
        "Punjabi",
        "Pashto",
        "Hindko",
      ])}

      {generateSection("Water Source for Household Use", [
        { label: "Borehole", value: "0%" },
        { label: "Govt", value: "0%" },
        { label: "Tanker", value: "0%" },
        { label: "Hand Pump", value: "0%" },
      ])}

      {generateSection("Fuel Source for Cooking", [
        { label: "Gas Meter", value: "0%" },
        { label: "Cylinder", value: "47%" },
        { label: "Wood", value: "0%" },
        { label: "Kerosene Stove", value: "0%" },
      ])}

      {generateSection("Residence", [
        { label: "Owned", value: "44%" },
        { label: "Rented", value: "4%" },
        { label: "Leased", value: "0%" },
      ])}

      {generateSection("Structure of Residence", [
        { label: "Brick Houses", value: "46%" },
        { label: "Mud Houses", value: "0%" },
      ])}

      {generateSection("Electricity Supply", [
        { label: "Solar", value: "0%" },
        { label: "Govt Meters", value: "48%" },
        { label: "Sharing", value: "0%" },
        { label: "Others", value: "0%" },
      ])}

      {generateSection("Age", [
        { label: "Children", value: "26" },
        { label: "Youth", value: "75" },
        { label: "Above Adults", value: "85" },
      ])}

      {generateSection("Gender", [
        { label: "Male", value: "135" },
        { label: "Female", value: "71" },
        { label: "Transgender", value: "0" },
      ])}

      {generateSection("Marital Status", [
        { label: "Single", value: "93" },
        { label: "Married", value: "87" },
        { label: "Widow", value: "6" },
        { label: "Divorced", value: "0" },
        { label: "Separated", value: "0" },
      ])}

      {generateSection("CNIC", [
        { label: "Yes", value: "151" },
        { label: "No", value: "0" },
      ])}
    </div>
  ),
  Chak_95_6R: (
    <div className="space-y-2">
      {generateSection("Family Structure", [
        { label: "Joint", value: "53%" },
        { label: "Separate", value: "47%" },
      ])}

      {generateSection("Religion", [
        { label: "Christianity", value: "78%" },
        { label: "Islam", value: "22%" },
        { label: "Hinduism", value: "0%" },
        { label: "Others", value: "0%" },
      ])}

      {generateSection("Local Languages", [
        "Urdu",
        "Punjabi",
        "Pashto",
        "Hindko",
      ])}

      {generateSection("Water Source for Household Use", [
        { label: "Borehole", value: "49%" },
        { label: "Govt", value: "2%" },
        { label: "Tanker", value: "4%" },
        { label: "Hand Pump", value: "0%" },
      ])}

      {generateSection("Fuel Source for Cooking", [
        { label: "Gas Meter", value: "45%" },
        { label: "Cylinder", value: "11%" },
        { label: "Wood", value: "24%" },
        { label: "Kerosene Stove", value: "0%" },
      ])}

      {generateSection("Residence", [
        { label: "Owned", value: "64%" },
        { label: "Rented", value: "36%" },
        { label: "Leased", value: "0%" },
      ])}

      {generateSection("Structure of Residence", [
        { label: "Brick Houses", value: "93%" },
        { label: "Mud Houses", value: "7%" },
      ])}

      {generateSection("Electricity Supply", [
        { label: "Solar", value: "0%" },
        { label: "Govt Meters", value: "99%" },
        { label: "Sharing", value: "1%" },
        { label: "Others", value: "0%" },
      ])}

      {generateSection("Age", [
        { label: "Children", value: "85" },
        { label: "Youth", value: "59" },
        { label: "Above Adults", value: "103" },
      ])}

      {generateSection("Gender", [
        { label: "Male", value: "119" },
        { label: "Female", value: "128" },
        { label: "Transgender", value: "0" },
      ])}

      {generateSection("Marital Status", [
        { label: "Single", value: "138" },
        { label: "Married", value: "106" },
        { label: "Widow", value: "0" },
        { label: "Divorced", value: "0" },
        { label: "Separated", value: "0" },
      ])}

      {generateSection("CNIC", [
        { label: "Yes", value: "151" },
        { label: "No", value: "96" },
      ])}
    </div>
  ),
  Chak_8_11L: (
    <div className="space-y-2">
      {generateSection("Family Structure", [
        { label: "Joint", value: "24%" },
        { label: "Separate", value: "26%" },
      ])}

      {generateSection("Religion", [
        { label: "Christianity", value: "50%" },
        { label: "Islam", value: "0%" },
        { label: "Hinduism", value: "0%" },
        { label: "Others", value: "0%" },
      ])}

      {generateSection("Local Languages", [
        "Urdu",
        "Punjabi",
        "Pashto",
        "Hindko",
      ])}

      {generateSection("Water Source for Household Use", [
        { label: "Borehole", value: "1%" },
        { label: "Govt", value: "12%" },
        { label: "Tanker", value: "0%" },
        { label: "Hand Pump", value: "0%" },
      ])}

      {generateSection("Fuel Source for Cooking", [
        { label: "Gas Meter", value: "0%" },
        { label: "Cylinder", value: "0%" },
        { label: "Wood", value: "50%" },
        { label: "Kerosene Stove", value: "0%" },
      ])}

      {generateSection("Residence", [
        { label: "Owned", value: "37%" },
        { label: "Rented", value: "13%" },
        { label: "Leased", value: "0%" },
      ])}

      {generateSection("Structure of Residence", [
        { label: "Brick Houses", value: "31%" },
        { label: "Mud Houses", value: "19%" },
      ])}

      {generateSection("Electricity Supply", [
        { label: "Solar", value: "0%" },
        { label: "Govt Meters", value: "50%" },
        { label: "Sharing", value: "0%" },
        { label: "Others", value: "0%" },
      ])}

      {generateSection("Age", [
        { label: "Children", value: "26" },
        { label: "Youth", value: "75" },
        { label: "Above Adults", value: "85" },
      ])}

      {generateSection("Gender", [
        { label: "Male", value: "115" },
        { label: "Female", value: "71" },
        { label: "Transgender", value: "0" },
      ])}

      {generateSection("Marital Status", [
        { label: "Single", value: "96" },
        { label: "Married", value: "87" },
        { label: "Widow", value: "6" },
        { label: "Divorced", value: "0" },
        { label: "Separated", value: "0" },
      ])}

      {generateSection("CNIC", [
        { label: "Yes", value: "151" },
        { label: "No", value: "0" },
      ])}
    </div>
  ),
};
