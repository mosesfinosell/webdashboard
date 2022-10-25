import { useEffect, useRef, useState } from "react";

export const useAddress = (id, formik) => {
  const [suggestion, setSuggestion] = useState(null);
  const autoCompleteRef = useRef(null);
  const addressField = useRef(null);

  const mapsURL =
    "https://maps.googleapis.com/maps/api/js?key=AIzaSyBHALMmKYNTo3_plGZVcusZ_matEMAnXMk&libraries=places";

  useEffect(() => {
    let script = document.querySelector(`script[src="${mapsURL}"]`);
    addressField.current = document.getElementById(id);
    if (!script) {
      script = document.createElement("script");
      script.type = "application/javascript";
      script.src = mapsURL;
      script.async = true;
      document.body.appendChild(script);
      script.addEventListener("load", handleMapScript);
    } else {
      handleMapScript();
    }

    return () => {
      addressField.current.removeEventListener("keydown", handleBackspacePress);
    };
  }, []);

  const handleMapScript = async () => {
    const options = {
      componentRestrictions: { country: "ng" },
      fields: ["address_components", "geometry", "name", "place_id"],
      types: ["establishment"],
    };
    if (!window.google) return setTimeout(() => handleMapScript(), 300);

    autoCompleteRef.current = await new window.google.maps.places.Autocomplete(
      addressField.current,
      options
    );

    autoCompleteRef.current.addListener("place_changed", async function () {
      const place = await autoCompleteRef.current.getPlace();

      const res = {
        placeid: place.place_id,
        lat: place.geometry.location.lat(),
        log: place.geometry.location.lng(),
        city: place.address_components[place.address_components.length - 4]
          .long_name,
        state:
          place.address_components[place.address_components.length - 3]
            .long_name,
      };

      setSuggestion(res);

      if (formik) formik.setFieldValue(id, addressField.current.value);
    });

    addressField.current.addEventListener("keydown", handleBackspacePress);
  };

  const handleBackspacePress = (e) => {
    if (e.key === "Backspace") {
      setSuggestion(null);
    }
  };
  return suggestion;
};
