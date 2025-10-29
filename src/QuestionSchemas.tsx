import QuestionAttributes, { QuestionType } from "./models/QuestionAttributes";

const questionSchemaHardcode: QuestionAttributes[] = [
    {
        name: "observableEntity",
        questionText: "Bob is an observable entity",
        type: QuestionType.YESNO,
    },
    {
        name: "complexSystem",
        questionText: "Bob is a complex system",
        type: QuestionType.YESNO,
    },
    {
        name: "causalAgent",
        questionText: "Bob is a causal agent",
        type: QuestionType.YESNO,
    },
    {
        name: "intentionalEntity",
        questionText: "Bob is an intentional entity",
        type: QuestionType.YESNO,
    },
    {
        name: "autonomousSystem",
        questionText: "Bob is an autonomous system",
        type: QuestionType.YESNO,
    },
];

const questionSchemaBackup: QuestionAttributes[] = [
    {
        name: "quantumFlavor",
        questionText: "Bob has a discernible quantum flavor",
        type: QuestionType.YESNO,
    },
    {
        name: "universalAntipathy",
        questionText: "Bob is the source of all universal antipathy",
        type: QuestionType.YESNO,
    },
    {
        name: "sentientSandwich",
        questionText: "Bob is secretly a sentient sandwich",
        type: QuestionType.YESNO,
    },
    {
        name: "spatiotemporalAnomaly",
        questionText: "Bob exists as a spatiotemporal anomaly",
        type: QuestionType.YESNO,
    },
    {
        name: "primaryColor",
        questionText: "Bob can be classified as a primary color",
        type: QuestionType.YESNO,
    },
    {
        name: "sockEnthusiast",
        questionText: "Bob's sole purpose is the collection of mismatched socks",
        type: QuestionType.YESNO,
    },
    {
        name: "atmosphericConstant",
        questionText: "Bob's mass is an atmospheric constant",
        type: QuestionType.YESNO,
    },
    {
        name: "harmonicResonator",
        questionText: "Bob functions as a universal harmonic resonator",
        type: QuestionType.YESNO,
    },
    {
        name: "miniatureDimension",
        questionText: "Bob contains a miniature pocket dimension",
        type: QuestionType.YESNO,
    },
    {
        name: "existentialPuzzle",
        questionText: "Bob is the final piece to an existential jigsaw puzzle",
        type: QuestionType.YESNO,
    }
];

export {questionSchemaHardcode, questionSchemaBackup};