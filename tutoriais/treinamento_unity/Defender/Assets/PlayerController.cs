using UnityEngine;
using System.Collections;

public class PlayerController : MonoBehaviour
{
    public GameObject Bullet;
    public Transform BulletSpawn;


    // Update is called once per frame
    void Update()
    {
        #region Look at mouse

        // Get mouse angle relative to player
        // First we need to get the mouse position as if it was a game object
        Vector3 MousePosition = Camera.main.ScreenToWorldPoint(Input.mousePosition);

        // Then we use Atan2 (very neat trigonometry function) to get the angle
        float mouseAngle = Mathf.Atan2(
                               MousePosition.y - transform.position.y,
                               MousePosition.x - transform.position.x
                           )*(180.0f/Mathf.PI);

        // Brief (Very brief) Explanation about quaternions:
        // Quaternions are a math structure used to represent rotations
        // Quaternion.Euler uses the easier to understand Euler angles representation
        // We will always use Euler angles
        transform.rotation = Quaternion.Euler(0f, 0f,
            mouseAngle);

        #endregion

        #region Shooting
        if (Input.GetMouseButtonDown(0))
        {
            // Create a new bullet at point
            Instantiate(Bullet, BulletSpawn.position, transform.rotation);
        }
        #endregion

    }
}
