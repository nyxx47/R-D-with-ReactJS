import React, { useEffect } from "react";
import { useRive, useViewModel } from "@rive-app/react-webgl2";

const RiveComponent = ({ inputValue }) => {
  const { rive, RiveComponent } = useRive({
    src: "/data_binding.riv",
    autoplay: true,
    onLoad: () => {
      console.log("Rive file loaded successfully!");
    },
    onLoadError: (error) => {
      console.error("Rive file failed to load:", error);
    },
  });

  // Get the ViewModel for data binding - using "TickerCode" as shown in the image
  const viewModel = useViewModel(rive, { name: "TickerCode" });

  // Debug: Log viewModel when it changes
  useEffect(() => {
    if (viewModel) {
      console.log("ViewModel loaded:", viewModel);
      console.log("ViewModel type:", typeof viewModel);
      console.log("ViewModel methods:", Object.getOwnPropertyNames(viewModel));
      console.log(
        "ViewModel prototype methods:",
        Object.getOwnPropertyNames(Object.getPrototypeOf(viewModel))
      );

      // Check if viewModel has instance method
      if (viewModel.instance) {
        console.log("ViewModel has instance method");
        const instance = viewModel.instance();
        console.log("Instance:", instance);
        console.log("Instance methods:", Object.getOwnPropertyNames(instance));
      }
    } else {
      console.log("ViewModel not loaded yet");
    }
  }, [viewModel]);

  // Effect to update Rive data binding when inputValue changes
  useEffect(() => {
    // Wait for viewModel to be loaded
    if (viewModel && inputValue !== undefined) {
      console.log("Attempting data binding with viewModel loaded");
      console.log(
        "⚠️  NOTE: String binding for text objects is NOT supported in this Rive version"
      );
      console.log("Input value:", inputValue);

      try {
        // Since string binding isn't supported, let's explore what's available

        // Method 1: Try using state machine inputs (if they exist)
        if (rive && rive.stateMachineInputs) {
          console.log("Trying state machine inputs approach");
          try {
            const stateMachineInputs =
              rive.stateMachineInputs("State Machine 1");
            if (stateMachineInputs) {
              console.log("State machine inputs:", stateMachineInputs);
              console.log(
                "Available inputs:",
                stateMachineInputs.map((input) => ({
                  name: input.name,
                  type: input.type,
                }))
              );

              // Look for any input that might control text
              const textControlInput = stateMachineInputs.find(
                (input) =>
                  input.name.toLowerCase().includes("text") ||
                  input.name.toLowerCase().includes("code") ||
                  input.name.toLowerCase().includes("string")
              );

              if (textControlInput) {
                console.log(
                  "Found potential text control input:",
                  textControlInput.name
                );
                if (textControlInput.type === "boolean") {
                  textControlInput.value = true;
                } else if (textControlInput.type === "trigger") {
                  textControlInput.trigger();
                }
                console.log("Triggered text control input");
                return;
              }
            }
          } catch (e) {
            console.log("State machine inputs failed:", e);
          }
        }

        // Method 2: Try to access artboard and log what's available
        if (rive && rive.artboard) {
          console.log("Inspecting artboard for text control options");
          const artboard = rive.artboard;

          if (artboard.textObjects) {
            console.log(
              "Text objects found:",
              artboard.textObjects.map((obj) => ({
                name: obj.name,
                text: obj.text,
              }))
            );
          }

          if (artboard.objects) {
            console.log(
              "All objects:",
              artboard.objects.map((obj) => ({
                name: obj.name,
                type: obj.constructor.name,
              }))
            );
          }
        }

        console.log(
          "❌ String binding not supported. Consider these alternatives:"
        );
        console.log("1. Use state machine inputs to control text changes");
        console.log("2. Create multiple text states in your Rive file");
        console.log(
          "3. Use boolean/trigger inputs to switch between text states"
        );
        console.log(
          "4. Redesign your Rive file to use supported binding methods"
        );
      } catch (error) {
        console.log("Data binding error:", error);
      }
    } else {
      console.log("Waiting for viewModel to load...", {
        viewModel: !!viewModel,
        inputValue,
      });
    }
  }, [rive, viewModel, inputValue]);

  return (
    <div
      style={{
        width: "100%",
        height: "400px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <RiveComponent
        style={{ width: "100%", height: "100%", maxWidth: "600px" }}
      />
      <div
        style={{
          marginTop: "10px",
          textAlign: "center",
          color: "#666",
          fontSize: "12px",
        }}
      >
        ⚠️ String binding not supported - check console for alternatives
      </div>
    </div>
  );
};

export default RiveComponent;
