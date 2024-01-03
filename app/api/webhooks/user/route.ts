import { handleWebhookEvent } from "@/server/utils/webhooks";
import { createNewUser, deleteUser } from "@/server/models/users.model";
import { MEMBERSHIP_PLANS } from "@/config/plans";
import { connectToDatabase } from "@/server/utils/db";

connectToDatabase();

export async function POST(req: Request) {
  try {
    const payload = await req.json();

    const evt = handleWebhookEvent(payload);
    if (!evt) {
      return new Error("Webhook processing failed");
    }

    switch (evt.type) {
      case "user.created":
        const evtData = evt.data;
        const newUser = await createNewUser({
          firstName: evtData.first_name,
          lastName: evtData.last_name,
          email: evtData.email_addresses[0].email_address,
          userId: evtData.id,
          username:
            evtData.username || `${evtData.first_name} ${evtData.last_name}`,
          userPalettes: [],
        });
        if (newUser)
          return new Response("User Created Successfully", {
            status: 201,
          });
        break;

      case "user.updated":
        console.log("updating user...");
        break;

      case "user.deleted":
        if (evt.data.id) {
          await deleteUser(evt.data.id);
          return new Response("User Deleted Successfully", {
            status: 200,
          });
        }
        break;
    }

    return new Response("Error Occured", {
      status: 400,
    });
  } catch (error: any) {
    console.error(error);

    return new Response(error.message, {
      status: 500,
    });
  }
}
