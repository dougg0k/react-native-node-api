import { suites as nodeAddonExamplesSuites } from "@react-native-node-api/node-addon-examples";
import {
  ConnectionText,
  MochaRemoteProvider,
  StatusEmoji,
  StatusText,
} from "mocha-remote-react-native";
// biome-ignore lint/correctness/noUnusedImports: Keep React
import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

function describeIf(
  condition: boolean,
  title: string,
  fn: (this: Mocha.Suite) => void,
) {
  return condition ? describe(title, fn) : describe.skip(title, fn);
}

type Context = {
  allTests?: boolean;
  nodeAddonExamples?: boolean;
  ferricExample?: boolean;
};

function loadTests({
  allTests = false,
  nodeAddonExamples = allTests,
  ferricExample = allTests,
}: Context) {
  describeIf(nodeAddonExamples, "Node Addon Examples", () => {
    for (const [suiteName, examples] of Object.entries(
      nodeAddonExamplesSuites,
    )) {
      describe(suiteName, () => {
        for (const [exampleName, requireExample] of Object.entries(examples)) {
          it(exampleName, async () => {
            const test = requireExample();
            if (test instanceof Function) {
              await test();
            }
          });
        }
      });
    }
  });
}

export default function App() {
  return (
    <MochaRemoteProvider tests={loadTests}>
      <SafeAreaView style={styles.container}>
        <ConnectionText style={styles.connectionText} />
        <View style={styles.statusContainer}>
          <StatusEmoji style={styles.statusEmoji} />
          <StatusText style={styles.statusText} />
        </View>
      </SafeAreaView>
    </MochaRemoteProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  statusContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  statusEmoji: {
    fontSize: 30,
    margin: 30,
    textAlign: "center",
  },
  statusText: {
    fontSize: 20,
    margin: 20,
    textAlign: "center",
  },
  connectionText: {
    textAlign: "center",
  },
});
