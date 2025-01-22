import BottomBanner from "../../../components/BottomBanner";
import CardLayout from "../../../components/layouts/CardLayout";
import { Button } from "../../../components/ui/Button";
import { CustomInput } from "../../../components/ui/CustomInput";
import { CustomTitle } from "../../../components/ui/CustomTitle";
import { addJobLists } from "../../../constant/jobs/addJobInput";

const CreateJobPage = () => {
  return (
    <>
      <CardLayout title=" Create Job Listing" link={{}}>
        <form className="grid gap-3">
          <CustomTitle name={"Job Info"} />
          <section className="space-y-4">
            {addJobLists.map((input) => {
              return input.descriptionType === "jobInfo" ? (
                <div>
                  <CustomInput key={input.name} {...input} />
                </div>
              ) : null;
            })}
          </section>
          <CustomTitle name={" Company Info & Location"} className={"mt-6"} />
          <section className="space-y-4">
            {addJobLists.map((input) => {
              return input.descriptionType === "companyInfo" ? (
                <div>
                  <CustomInput key={input.name} {...input} />
                </div>
              ) : null;
            })}
          </section>

          <div className="space-y-4">
            <Button className="w-full bg-green-500 hover:bg-green-600  ">
              Save
            </Button>
            <Button className="block text-center w-full bg-red-500 hover:bg-red-600  ">
              Cancel
            </Button>
          </div>
        </form>
      </CardLayout>
      <BottomBanner />
    </>
  );
};

export default CreateJobPage;
