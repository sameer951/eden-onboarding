const configData = [
    {
        title: 'Welcome! First things first',
        subtitle: 'You can always change them later',
        type: 'input',
        inputData: [
            { label: 'First Name', example: 'Steve Jobs', fieldName: 'firstName', isOptional: false },
            { label: 'Display Name', example: 'Steve', fieldName: 'displayName', isOptional: false }
        ],
        submitLabel: 'Create workspace',
        isLastQue: false
    },
    {
        title: "Let's setup a home for all your work",
        subtitle: 'You can always create another workspace later',
        type: 'input',
        inputData: [
            { label: 'Workspace Name', example: 'Eden', fieldName: 'workSpaceName', isOptional: false },
            { label: 'Workspace Url', example: 'www.eden.com', fieldName: 'workspaceUrl', isOptional: true }
        ],
        submitLabel: 'Create workspace',
        isLastQue: false
    },
    {
        title: "How are you planning to use $displayName ?",
        subtitle: "We'll stream line your setup experience accordingly.",
        type: 'data-radio',
        fieldName: 'workspaceType',
        inputData: [
            { label: 'For myself', desc: 'Write better. Think more clearly. Stay organized.', id: 'formyself' },
            { label: 'with my team', desc: 'wikis, docs,tasks & projects, all in one place.', id: 'formyteam' }
        ],
        submitLabel: 'Create workspace',
        isLastQue: false
    },
    {
        type:'thankyou',
        title: "Congratulations, $displayName !",
        subtitle: "You have completed onboarding, you can start using the Eden!",
        submitLabel: 'Launch Eden',
        isLastQue: true
    }
];
export default configData;